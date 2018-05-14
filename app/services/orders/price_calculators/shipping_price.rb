# frozen_string_literal: true

module Orders
  module PriceCalculators
    class ShippingPrice < BasicCalculator
      DOZEN = 12
      LARGE_SHIPMENT_CUPCAKE_COUNT = DOZEN * 24
      DELIVERY_PRICE = 16.0
      LARGE_DELIVERY_PRICE = 50.0
      SHIPPING_PRICE = 18.0
      LARGE_SHIPMENT_PRICE = 50.0
      SHIPPING_METHOD_FIELD = :shipping_method
      DELIVERY_DATE_FIELD = :delivery_starting_at
      EXTRA_PRICE = 30.0

      def call
        return 0.0 if pickup?

        if monday_delivery? || tuseday_delivery?
          return price + EXTRA_PRICE
        end

        price
      end

      private

      def price
        @price ||= begin
          return LARGE_DELIVERY_PRICE if delivery? && large_shipment?
          return DELIVERY_PRICE if delivery?
          return LARGE_SHIPMENT_PRICE if shipping? && large_shipment?
          SHIPPING_PRICE
        end
      end

      def monday_delivery?
        return unless delivery_date
        delivery_date.wday == 1
      end

      def tuseday_delivery?
        return unless delivery_date
        delivery_date.wday == 2
      end

      def delivery_date
        @delivery_date ||= order_args[DELIVERY_DATE_FIELD]&.to_date
      end

      def pickup?
        order_args[SHIPPING_METHOD_FIELD] == 'pickup'
      end

      def delivery?
        order_args[SHIPPING_METHOD_FIELD] == 'manhattan_delivery'
      end

      def shipping?
        order_args[SHIPPING_METHOD_FIELD] == 'shipping'
      end

      def large_shipment?
        cupcakes_quantity > LARGE_SHIPMENT_CUPCAKE_COUNT
      end

      def cupcakes_quantity
        return 0 unless order_args[:cupcakes]
        order_args[:cupcakes].map do |cupcake|
          cupcake&.dig(:quantity) || 0
        end.sum.to_i
      end
    end
  end
end
