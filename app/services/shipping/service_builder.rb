# frozen_string_literal: true

module Shipping
  class ServiceBuilder < BasicService
    class Error < StandardError; end
    class UnknownServiceProvider < Error; end

    FEDEX_CREDENTIALS = {
      meter: Rails.application.secrets.dig(:fedex, :meter_number).to_s,
      key: Rails.application.secrets.dig(:fedex, :key).to_s,
      password: Rails.application.secrets.dig(:fedex, :password).to_s,
      account: Rails.application.secrets.dig(:fedex, :account_number).to_s,
      login: Rails.application.secrets.dig(:fedex, :meter_number).to_s,
      test: Rails.application.secrets.dig(:fedex, :test_mode)
    }.deep_freeze

    attr_reader :service_provider

    def initialize(service_provider = :fedex)
      @service_provider = service_provider
    end

    def call
      service_class.new(**credentials)
    end

    private

    def service_class
      @service_class ||=
        case service_provider
        when :fedex then ActiveShipping::FedEx
        else
          raise UnknownServiceProvider
        end
    end

    def credentials
      @credentials ||=
        case service_provider
        when :fedex then FEDEX_CREDENTIALS
        else
          raise UnknownServiceProvider
        end
    end
  end
end
