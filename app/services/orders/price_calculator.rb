# frozen_string_literal: true

module Orders
  class PriceCalculator < Orders::PriceCalculators::BasicCalculator
    def call
      {
        units: units_price,
        cupcake_designs: cupcake_designs_price,
        gift_message: gift_message_price,
        rush_order: rush_order_price,
        shipping: shipping_price || 0.0,
        discount: discount,
        total: total
      }
    end

    private

    def units_price
      @units_price ||= PriceCalculators::UnitsPrice.call(order_args)
    end

    def gift_message_price
      @gift_message_price ||=
        PriceCalculators::GiftMessagePrice.call(order_args)
    end

    def rush_order_price
      @rush_order_price ||= PriceCalculators::RushOrderPrice.call(order_args)
    end

    def cupcake_designs_price
      @cupcake_designs_price ||=
        PriceCalculators::CupcakeDesignPrice.call(order_args)
    end

    def shipping_price
      @shipping_price ||= PriceCalculators::ShippingPrice.call(order_args)
    end

    def discount
      @discount ||= PriceCalculators::Discount.call(order_args)
    end

    def total
      @total ||= begin
        price = PriceCalculators::TotalPrice.call(order_args) - discount
        return 0.0 if price.negative?
        price
      end
    end
  end
end
