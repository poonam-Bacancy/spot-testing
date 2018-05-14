# frozen_string_literal: true

module Resolvers
  module Orders
    class ValidatePersonalInformation < Validate
      def validator
        ::OrderValidator::PersonalInformation
      end
    end
  end
end
