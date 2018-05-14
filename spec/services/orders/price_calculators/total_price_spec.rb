# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Orders::PriceCalculators::TotalPrice, type: :service do
  describe '#call' do
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

    subject { described_class.new(order_args) }

    context 'invalid order' do
      before do
        order_args[:count_cupcakes_by] = 'foo'
        order_args[:cupcakes] = [{ quantity: 13 }]
      end

      it 'raises an Orders::PriceCalculators::Errors::Error' do
        expect do
          subject.call
        end.to raise_error(Orders::PriceCalculators::Errors::Error)
      end
    end

    context 'valid order' do
      context 'no promotion' do
        it "returns the order's price" do
          VCR.use_cassette("total_price-valid_order-no_promotion-returns_the_orders_price") do
            expect(subject.call).to eq(84.0)
          end
        end
      end

      context 'with a promotion' do
        let(:promotion) do
          build_stubbed(:promotion_code, kind: 'free_gift_message')
        end

        before do
          allow(PromotionCode).to(
            receive(:find_by)
            .with(code: promotion.code)
            .and_return(promotion)
          )
        end

        it "returns the order's price (ignores the promotion)" do
          VCR.use_cassette("totalPrice#call-valid_order-with_a_promotion-returns-the-orders-price-without-promotion") do
            expect(subject.call).to eq(84.0)
          end
        end
      end
    end
  end
end
