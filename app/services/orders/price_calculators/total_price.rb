# frozen_string_literal: true

module Orders
  module PriceCalculators
    class TotalPrice < BasicCalculator
      def call
        prices.map { |price| price.round(2) }.sum.round(2)
      end

      private

      def prices
        [
          units_price,
          gift_message_price,
          rush_order_price,
          cupcake_designs_price,
          shipping_price || 0.0
        ]
      end

      def units_price
        PriceCalculators::UnitsPrice.call(order_args)
      end

      def gift_message_price
        PriceCalculators::GiftMessagePrice.call(order_args)
      end

      def rush_order_price
        PriceCalculators::RushOrderPrice.call(order_args)
      end

      def cupcake_designs_price
        PriceCalculators::CupcakeDesignPrice.call(order_args)
      end

      def shipping_price
        PriceCalculators::ShippingPrice.call(order_args)
      end
    end
  end
end
