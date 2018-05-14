# frozen_string_literal: true

module Resolvers
  module Orders
    class ValidatePayment < Validate
      def validator
        ::OrderValidator::Payment
      end
    end
  end
end
