# frozen_string_literal: true

module Resolvers
  module Cliparts
    class Index < BaseResolver
      def call
        Clipart.all
      end
    end
  end
end
