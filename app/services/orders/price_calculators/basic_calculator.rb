# frozen_string_literal: true

module Orders
  module PriceCalculators
    class BasicCalculator < BasicService
      def initialize(order_args)
        @order_args = order_args&.with_indifferent_access
      end

      protected

      attr_reader :order_args
    end
  end
end
