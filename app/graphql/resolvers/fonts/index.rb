# frozen_string_literal: true

module Resolvers
  module Fonts
    class Index < BaseResolver
      def call
        Font.all
      end
    end
  end
end
