# frozen_string_literal: true

module Orders
  module PriceCalculators
    class CupcakeDesignPrice < BasicCalculator
      def call
        return 0.0 if cupcake_designs_count <= Order::FREE_CUPCAKE_DESIGNS_COUNT
        count = cupcake_designs_count - Order::FREE_CUPCAKE_DESIGNS_COUNT
        (1.0 * count).round(2)
      end

      private

      def cupcake_designs_count
        order_args[:cupcakes].count
      end
    end
  end
end
