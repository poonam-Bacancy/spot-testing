# frozen_string_literal: true

module Resolvers
  module Orders
    class Create
      class SetPrice < BasicService
        attr_reader :args

        def initialize(args:)
          @args = args
        end

        def call
          assign_args!
          args
        end

        private

        def assign_args!
          args[:units_price] = prices[:units]
          args[:cupcake_designs_price] = prices[:cupcake_designs]
          args[:gift_message_price] = prices[:gift_message]
          args[:rush_order_price] = prices[:rush_order]
          args[:shipping_price] = prices[:shipping]
          args[:discount] = prices[:discount]
          args[:total] = prices[:total]
        end

        def prices
          @prices ||= ::Orders::PriceCalculator.call(args)
        end
      end
    end
  end
end
