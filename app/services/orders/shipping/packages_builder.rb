# frozen_string_literal: true

module Orders
  module Shipping
    class PackagesBuilder < BasicService
      def initialize(arguments)
        @arguments = arguments
      end

      def call
        [standard_package]
      end

      private

      def standard_package
        ::Shipping::Package.new(
          weight: 1400,
          width: 43.18,
          depth: 35.56,
          height: 22.86
        )
      end
    end
  end
end
