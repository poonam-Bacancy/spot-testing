# frozen_string_literal: true

module Orders
  module PriceCalculators
    module Errors
      class Error < StandardError; end
      class NonIntegerUnitCount < Error; end
      class InvalidCountAttribute < Error; end
      class FailedToContactShippingService < Error; end
      class NoShippingRateFound < Error; end
    end
  end
end
