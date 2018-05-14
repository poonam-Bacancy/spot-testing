# frozen_string_literal: true

module Resolvers
  module CupcakeTypes
    class Index < BaseResolver
      def call
        CupcakeType.all
      end
    end
  end
end
