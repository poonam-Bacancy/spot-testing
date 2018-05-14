# frozen_string_literal: true

module Shipping
  class RateFetcher < BasicService
    attr_reader :packages
    attr_reader :destination
    attr_reader :service_provider
    attr_reader :turn_around_time

    def initialize(
      packages:,
      destination:,
      turn_around_time: nil,
      service_provider: :fedex
    )
      @packages = convert_to_active_shipping(Array(packages))
      @destination = convert_to_active_shipping(destination)
      @service_provider = service_provider
      @turn_around_time = turn_around_time
    end

    def call
      service
        .find_rates(origin, destination, packages, options)
        .rates
        .map { |rate| Rate.new(rate) }
    end

    private

    def service
      @service ||= ServiceBuilder.call(service_provider)
    end

    def origin
      @origin ||= ActiveShipping::Location.new(
        country: secret.dig(:shipping, :origin, :country),
        state: secret.dig(:shipping, :origin, :state),
        city: secret.dig(:shipping, :origin, :city),
        zip: secret.dig(:shipping, :origin, :zip),
        address1: secret.dig(:shipping, :origin, :address)
      )
    end

    def secret
      @secret ||= Rails.application.secrets.with_indifferent_access
    end

    def options
      return {} unless turn_around_time
      {
        turn_around_time: converted_turn_around_time
      }
    end

    def converted_turn_around_time
      (turn_around_time.to_i - DateTime.now.to_i) / 1.hour
    end

    def convert_to_active_shipping(object)
      if object.is_a?(Array)
        object.map(&method(:convert_to_active_shipping))
      elsif object.respond_to?(:to_activeshipping)
        object.to_activeshipping
      else
        object
      end
    end
  end
end
