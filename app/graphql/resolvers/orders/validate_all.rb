# frozen_string_literal: true

module Resolvers
  module Orders
    class ValidateAll < Validate
      def validator
        ::OrderValidator::All
      end
    end
  end
end
