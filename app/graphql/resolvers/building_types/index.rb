# frozen_string_literal: true

module Resolvers
  module BuildingTypes
    class Index < BaseResolver
      def call
        BuildingType.all
      end
    end
  end
end
