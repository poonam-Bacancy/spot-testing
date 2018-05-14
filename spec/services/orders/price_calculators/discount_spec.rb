# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Orders::PriceCalculators::Discount, type: :service do
  describe '#call' do
    context 'no promotion' do
      let(:order_args) do
        {
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 0' do
        expect(subject.call).to eq(0.0)
      end
    end

    context 'non existant promotion' do
      let(:order_args) do
        {
          promo_code: 'foo'
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 0' do
        expect(subject.call).to eq(0.0)
      end
    end

    context 'existing promotion' do
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
      let(:promotion) { build_stubbed(:promotion_code) }

      subject { described_class.new(order_args) }

      before do
        allow(PromotionCode).to(
          receive(:find_by)
          .with(code: promotion.code)
          .and_return(promotion)
        )
      end

      context 'that has expired' do
        before do
          promotion.kind = 'free_order'
          promotion.expires_at = 3.days.ago
        end

        it 'returns 0.0' do
          expect(subject.call).to eq(0.0)
        end
      end

      context 'that is a total order discount promotion' do
        before do
          promotion.kind = 'free_order'
        end

        it 'returns the same as the total calculator' do
          VCR.use_cassette("discount#call-existing_promotion-that_is_a_free_order_promotion") do
            expect(subject.call).to(
              eq(Orders::PriceCalculators::TotalPrice.call(order_args))
            )
          end
        end

        context 'invalid order arguments' do
          before do
            order_args[:count_cupcakes_by] = 'foo'
          end

          it 'returns 0' do
            expect(subject.call).to eq(0.0)
          end
        end
      end

      context 'that is a free shipping promotion' do
        before do
          promotion.kind = 'free_shipping'
        end

        it 'returns the same as the shipping calculator' do
          VCR.use_cassette("discount#call-existing_promotion-that_is_a_free_shipping_promotion-returns_the_same_as_the_shipping_calculator") do
            expect(subject.call).to(
              eq(Orders::PriceCalculators::ShippingPrice.call(order_args))
            )
          end
        end
      end

      context 'that is a free designs promotion' do
        before do
          promotion.kind = 'free_designs'
        end

        it 'returns the same as the cupcake designs calculator' do
          expect(subject.call).to(
            eq(Orders::PriceCalculators::CupcakeDesignPrice.call(order_args))
          )
        end
      end

      context 'that is a free gift message promotion' do
        before do
          promotion.kind = 'free_gift_message'
        end

        it 'returns the same as the gift message calculator' do
          expect(subject.call).to(
            eq(Orders::PriceCalculators::GiftMessagePrice.call(order_args))
          )
        end
      end

      context 'that is a free rush order promotion' do
        before do
          promotion.kind = 'free_rush_order'
        end

        it 'returns the same as the rush order calculator' do
          expect(subject.call).to(
            eq(Orders::PriceCalculators::RushOrderPrice.call(order_args))
          )
        end
      end

      context 'that is a percentage discount' do
        before do
          promotion.kind = 'percentage'
        end

        context 'when the amount is 10%' do
          before do
            promotion.amount = 10.0
          end

          it 'returns 10% of the order total' do
            expect(subject.call).to(
              eq(
                (
                  Orders::PriceCalculators::TotalPrice.call(order_args) * 0.1
                ).round(2)
              )
            )
          end
        end

        context 'when the amount is nil' do
          before do
            promotion.amount = nil
          end

          it 'returns 0' do
            expect(subject.call).to(eq(0.0))
          end
        end

        context 'when the amount is 110%' do
          before do
            promotion.amount = 10_000_000.0
          end

          it 'returns the order total' do
            expect(subject.call).to(
              eq(Orders::PriceCalculators::TotalPrice.call(order_args))
            )
          end
        end
      end

      context 'that is a percentage discount' do
        before do
          promotion.kind = 'fixed_amount'
        end

        context 'when the amount is less than the order total' do
          before do
            promotion.amount = 10.0
          end

          it 'returns the promotions amount' do
            expect(subject.call).to(
              eq(10.0)
            )
          end
        end

        context 'when the amount is nil' do
          before do
            promotion.amount = nil
          end

          it 'returns 0' do
            expect(subject.call).to(eq(0.0))
          end
        end

        context 'when the amount is greater than the order total' do
          before do
            promotion.amount = 10_000_000.0
          end

          it 'returns the order total' do
            expect(subject.call).to(
              eq(Orders::PriceCalculators::TotalPrice.call(order_args))
            )
          end
        end
      end
    end
  end
end
