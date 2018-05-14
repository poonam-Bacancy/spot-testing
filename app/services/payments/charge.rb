# frozen_string_literal: true

module Payments
  class Charge < BasicService
    CURRENCY = 'usd'

    def initialize(order:, token: , description: nil)
      @order = order
      @token = token
      @description = description
    end

    def call
      return unless order
      return unless token

      response = charge!
      store_response!(response)
    end

    protected

    attr_reader :order
    attr_reader :token

    private

    def charge!
      Stripe::Charge.create(
        amount: (order.total * 100).to_i,
        currency: CURRENCY,
        card: token,
        description: description
      )
    end

    def description
      @description ||= "Payment for order ##{order.id}"
    end

    def store_response!(response)
      data = order.payment_data || []

      data << {
        id: response.id,
        paid: response.paid,
        object: response.object,
        raw: response.to_hash
      }

      order.update(payment_data: data)
    end
  end
end
