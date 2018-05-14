# frozen_string_literal: true

module Resolvers
  module Orders
    class Create
      class ProcessPayment < BasicService
        attr_reader :args
        attr_reader :order

        def initialize(args:, order:)
          @args = args
          @order = order
        end

        def call
          return true if order&.total&.zero?
          ::Payments::Charge.call(order: order, token: args)
        end
      end
    end
  end
end
