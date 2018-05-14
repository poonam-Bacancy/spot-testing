# frozen_string_literal: true

module Resolvers
  module Orders
    class ValidatePersonalization < Validate
      def validator
        ::OrderValidator::Personalization
      end
    end
  end
end
