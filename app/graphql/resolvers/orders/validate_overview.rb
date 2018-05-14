# frozen_string_literal: true

module Resolvers
  module Orders
    class ValidateOverview < Validate
      def validator
        ::OrderValidator::Overview
      end
    end
  end
end
