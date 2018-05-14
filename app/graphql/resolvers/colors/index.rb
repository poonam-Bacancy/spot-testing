# frozen_string_literal: true

module Resolvers
  module Colors
    class Index < BaseResolver
      def call
        Color.all
      end
    end
  end
end
