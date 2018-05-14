# frozen_string_literal: true

module Resolvers
  module Orders
    class Create
      class CreateAssociations
        class CreateCupcakeTypes < BasicService
          attr_reader :args
          attr_reader :order
          attr_reader :errors

          def initialize(args:, order:, errors:)
            @args = args
            @order = order
            @errors = errors
          end

          def call
            return unless order

            args.map do |flavor_id|
              flavor =
                OrderCupcakeType.create(
                  cupcake_type_id: flavor_id,
                  order: order
                )
              errors << (flavor.errors.any? ? flavor.errors.to_h : nil)
            end
          end
        end
      end
    end
  end
end
