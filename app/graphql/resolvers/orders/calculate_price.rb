# frozen_string_literal: true

module Resolvers
  module Orders
    class CalculatePrice < BaseResolver
      def call
        {
          units: prices[:units],
          cupcakeDesigns: prices[:cupcake_designs],
          giftMessage: prices[:gift_message],
          rushOrder: prices[:rush_order],
          shipping: prices[:shipping],
          discount: prices[:discount],
          total: prices[:total]
        }
      end

      private

      def prices
        @prices ||= ::Orders::PriceCalculator.call(order_args)
      end

      def order_args
        @order_args ||= ::Orders::InputToOrderArgumentsConverter.call(args)
      end

      def args
        arguments.to_h['order'].with_indifferent_access
      end
    end
  end
end
