# frozen_string_literal: true

module Orders
  module PriceCalculators
    class Discount < BasicCalculator
      def call
        return 0.0 unless promotion_code
        discount_amount
      end

      private

      def promotion_code
        @promotion_code ||= begin
          return unless order_args[:promo_code]
          code = PromotionCode.find_by(code: order_args[:promo_code])
          return if code&.expired?
          code
        end
      end

      def discount_amount
        case promotion_code.kind.to_sym
        when :percentage then percentage
        when :fixed_amount then fixed_amount
        when :free_order then total_price
        when :free_shipping then shipping_price
        when :free_designs then cupcake_design_price
        when :free_gift_message then gift_message_price
        when :free_rush_order then rush_order_price
        end
      end

      def percentage
        return 0 unless promotion_code.amount
        percentage = (promotion_code.amount.round(2) / 100.0).round(2)
        amount = (total_price.round(2) * percentage).round(2)

        if amount > total_price
          total_price
        else
          amount
        end
      end

      def fixed_amount
        return 0 unless promotion_code.amount

        amount = promotion_code.amount.round(2)
        price = total_price.round(2)

        return amount if amount < price

        amount = amount - price
        amount.round(2).clamp(0, total_price)
      end

      def total_price
        @total_price ||= Orders::PriceCalculators::TotalPrice.call(order_args)
      rescue Errors::Error
        0.0
      end

      def shipping_price
        Orders::PriceCalculators::ShippingPrice.call(order_args)
      rescue Errors::Error
        0.0
      end

      def cupcake_design_price
        Orders::PriceCalculators::CupcakeDesignPrice.call(order_args)
      end

      def gift_message_price
        Orders::PriceCalculators::GiftMessagePrice.call(order_args)
      end

      def rush_order_price
        Orders::PriceCalculators::RushOrderPrice.call(order_args)
      end
    end
  end
end
