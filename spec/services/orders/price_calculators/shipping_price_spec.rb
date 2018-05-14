# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Orders::PriceCalculators::ShippingPrice, type: :service do
  describe '#call' do
    context 'with invalid params' do
      context 'location or package is missing or faulty' do
        it 'returns nil' do
          expect(described_class.call({})).to(
            eq(Orders::PriceCalculators::ShippingPrice::SHIPPING_PRICE)
          )
        end
      end
    end

    context 'with valid params' do
      let(:order_args) do
        {
          promo_code: 'test',
          gift_message: 'I love ya!',
          rush_order: true,
          count_cupcakes_by: 'the_dozen',
          cupcakes: [{ quantity: 24 }],
          address: {
            street: '1501-1519 NW 8th St',
            city: 'Fort Lauderdale',
            state: 'FL',
            zipcode: '33311',
            country: 'USA'
          }
        }.with_indifferent_access
      end

      context 'when the shipping_method is pickup' do
        before do
          order_args[:shipping_method] = 'pickup'
        end

        it 'returns 0' do
          expect(described_class.call(order_args)).to(eq(0.0))
        end
      end

      context 'when the shipping_method is manhattan_delivery' do
        before do
          order_args[:shipping_method] = 'manhattan_delivery'
        end

        it 'returns the delivery price' do
          expect(described_class.call(order_args)).to(
            eq(Orders::PriceCalculators::ShippingPrice::DELIVERY_PRICE)
          )
        end

        context 'and there are less than 24 dozen cupcakes' do
          before do
            order_args[:cupcakes] = [{ quantity: 12 * 1 }]
          end

          it 'returns the delivery price' do
            expect(described_class.call(order_args)).to(
              eq(Orders::PriceCalculators::ShippingPrice::DELIVERY_PRICE)
            )
          end
        end

        context 'and there are less than 24 dozen cupcakes' do
          before do
            order_args[:cupcakes] = [{ quantity: 12 * 25 }]
          end

          it 'returns the large delivery price' do
            expect(described_class.call(order_args)).to(
              eq(Orders::PriceCalculators::ShippingPrice::LARGE_DELIVERY_PRICE)
            )
          end
        end
      end

      context 'when the shipping_method is shipping' do
        before do
          order_args[:shipping_method] = 'shipping'
        end

        context 'and there are less than 24 dozen cupcakes' do
          before do
            order_args[:cupcakes] = [{ quantity: 12 * 1 }]
          end

          it 'returns the shipping price' do
            expect(described_class.call(order_args)).to(
              eq(Orders::PriceCalculators::ShippingPrice::SHIPPING_PRICE)
            )
          end
        end

        context 'and there are less than 24 dozen cupcakes' do
          before do
            order_args[:cupcakes] = [{ quantity: 12 * 25 }]
          end

          it 'returns the large shipment price' do
            expect(described_class.call(order_args)).to(
              eq(Orders::PriceCalculators::ShippingPrice::LARGE_SHIPMENT_PRICE)
            )
          end
        end
      end

      context 'when the delivery is on a monday or a tuseday' do
        let(:extra) { 30.0 }

        before do
          order_args[:delivery_starting_at] = '2018-03-26 09:30'
        end

        context 'and the shipping method is manhattan_delivery' do
          before do
            order_args[:shipping_method] = 'manhattan_delivery'
          end

          it 'returns the delivery price + extra' do
            expect(described_class.call(order_args)).to(
              eq(
                Orders::PriceCalculators::ShippingPrice::DELIVERY_PRICE + extra
              )
            )
          end
        end

        context 'and the shipping method is shipping' do
          before do
            order_args[:shipping_method] = 'shipping'
          end

          it 'returns the delivery price + extra' do
            expect(described_class.call(order_args)).to(
              eq(
                Orders::PriceCalculators::ShippingPrice::SHIPPING_PRICE + extra
              )
            )
          end
        end
      end
    end
  end
end
