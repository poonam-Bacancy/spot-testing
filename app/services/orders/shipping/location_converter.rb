# frozen_string_literal: true

module Orders
  module Shipping
    class LocationConverter < BasicService
      attr_reader :arguments

      def initialize(arguments)
        @arguments = arguments
      end

      def call
        return unless arguments
        return unless valid?

        ::Shipping::Location.new(
          country: country,
          state: state,
          city: city,
          zip_code: zip,
          address_1: address1
        )
      end

      private

      def valid?
        return unless address
        OrderValidator::Address.call(address).success?
      end

      def address
        @address ||= arguments.to_h.with_indifferent_access[:address]
      end

      def country
        address[:country] || 'US'
      end

      def state
        address[:state]
      end

      def city
        address[:city]
      end

      def zip
        address[:zipcode]
      end

      def address1
        address[:street]
      end
    end
  end
end
