# frozen_string_literal: true

module Resolvers
  module Orders
    class Create
      class ExtractAssociations < BasicService
        attr_reader :args

        def initialize(args:)
          @args = args
        end

        def call
          {
            cupcakes_args: args.delete(:cupcakes),
            cupcake_types_args: args.delete(:flavor_ids),
            stripe_token: args.delete(:stripe_token),
            promocode: args.delete(:promo_code)
          }
        end
      end
    end
  end
end
