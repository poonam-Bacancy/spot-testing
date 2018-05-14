# frozen_string_literal: true

module Resolvers
  module Industries
    class Index < BaseResolver
      def call
        Industry.all
      end
    end
  end
end
