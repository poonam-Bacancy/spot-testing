# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Orders::PriceCalculator, type: :service do
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
      let(:promotion) do
        build_stubbed(:promotion_code)
      end

      before do
        allow(PromotionCode).to(
          receive(:find_by)
          .with(code: promotion.code)
          .and_return(promotion)
        )
        promotion.kind = 'free_gift_message'
      end

      it "returns the order's prices" do
        expected_prices = {
          units: 50.0,
          cupcake_designs: 0.0,
          gift_message: 1.0,
          rush_order: 15.0,
          shipping: 18.0,
          discount: 1.0,
          total: 83.0
        }

        VCR.use_cassette("price_calculator#call-valid_prder-returns_the_orders_prices") do
          expect(subject.call).to eq(expected_prices)
        end
      end
    end
  end
end
