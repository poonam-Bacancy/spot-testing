# frozen_string_literal: true

module Orders
  module PriceCalculators
    class GiftMessagePrice < BasicCalculator
      def call
        return 1.0 if gift_message_present?
        0.0
      end

      private

      def gift_message_present?
        order_args[:gift_message].present?
      end
    end
  end
end
