# frozen_string_literal: true

module Resolvers
  module Orders
    class Create
      class CreateAssociations
        class CreatePromocode < BasicService
          attr_reader :args
          attr_reader :order
          attr_reader :errors

          def initialize(args:, order:, errors:)
            @args = args
            @order = order
            @errors = errors
          end

          def call
            promocode = PromotionCode.find_by(code: args)
            return unless promocode
            return if promocode.expired?

            order.update(promotion_code: promocode)
          end
        end
      end
    end
  end
end
