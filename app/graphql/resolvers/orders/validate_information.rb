# frozen_string_literal: true

module Resolvers
  module Orders
    class ValidateInformation < Validate
      def validator
        ::OrderValidator::Information
      end
    end
  end
end
