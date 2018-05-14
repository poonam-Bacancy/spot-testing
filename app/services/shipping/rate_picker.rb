# frozen_string_literal: true

module Shipping
  class RatePicker < BasicService
    DEFAULT_WHITELIST = %w[
      FEDEX_EXPRESS_SAVER
      FEDEX_GROUND
    ].freeze

    attr_reader :rates
    attr_reader :whitelist

    def initialize(rates:, whitelist: nil)
      @rates = rates
      @whitelist = (whitelist || DEFAULT_WHITELIST).compact.map(&:to_s)
    end

    def call
      rates
        .compact
        .select { |rate| whitelist.include?(rate.code.to_s) }
        .sort_by { |rate| [rate.delivery_date, rate.price] }
        .first
    end
  end
end
