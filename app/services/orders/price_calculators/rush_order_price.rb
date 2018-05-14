# frozen_string_literal: true

module Orders
  module PriceCalculators
    class RushOrderPrice < BasicCalculator
      def call
        return 0.0 unless order_args[:rush_order]
        Order::RUSH_ORDER_PRICE.round(2)
      end
    end
  end
end
