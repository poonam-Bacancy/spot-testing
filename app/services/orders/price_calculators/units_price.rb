# frozen_string_literal: true

module Orders
  module PriceCalculators
    class UnitsPrice < BasicCalculator
      def call
        (unit_price * units_count).round(2)
      end

      private

      def unit_price
        Order::UNIT_PRICES[count_cupcakes_by].round(2)
      end

      def units_count
        count = cupcakes_quantity / unit_size
        # Raise unless the count is a whole number
        raise(Errors::NonIntegerUnitCount) if count % 1 != 0.0
        count.to_i
      end

      def cupcakes_quantity
        return 0 unless order_args[:cupcakes]
        order_args[:cupcakes].map do |cupcake|
          (cupcake && cupcake[:quantity]) || 0
        end.sum.to_i
      end

      def unit_size
        Order::UNIT_SIZES[count_cupcakes_by].round(2)
      end

      def count_cupcakes_by
        @count_cupcakes_by ||= begin
          count_by = order_args[:count_cupcakes_by]
          raise(Errors::InvalidCountAttribute) if count_by.nil?
          count_by = count_by.to_sym
          unless Order::COUNT_CUPCAKES_BY.include?(count_by)
            raise(Errors::InvalidCountAttribute)
          end
          count_by
        end
      end
    end
  end
end
