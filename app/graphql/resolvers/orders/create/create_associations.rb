# frozen_string_literal: true

module Resolvers
  module Orders
    class Create
      class CreateAssociations < BasicService
        attr_reader :args
        attr_reader :order
        attr_reader :errors

        def initialize(args:, order:, errors:)
          @args = args
          @order = order
          @errors = errors
        end

        def call
          CreateCupcakes.call(
            order: order, args: args[:cupcakes_args], errors: errors
          )
          CreateCupcakeTypes.call(
            order: order, args: args[:cupcake_types_args], errors: errors
          )
          CreatePromocode.call(
            order: order,args: args[:promocode], errors: errors
          )
        end
      end
    end
  end
end
