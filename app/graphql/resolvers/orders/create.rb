# frozen_string_literal: true

module Resolvers
  module Orders
    class Create < BaseResolver
      def call
        self.errors = []
        @order_args = order_arguments.dup

        create_order!
        NotifyUser.call(order: order) if valid? && order&.paid?

        response
      end

      protected

      attr_accessor :order
      attr_accessor :errors
      attr_reader :order_args

      private

      def create_order!
        ActiveRecord::Base.transaction { persist! }
      rescue Stripe::StripeError => error
        Rails.logger.error(
          "Failed to process payment for order #{order&.id} - #{error}"
        )
        errors << { stripe_token: 'Payment rejected' }
      end

      def persist!
        return unless validate!

        SetPrice.call(args: order_args)
        SetPreparationInformation.call(args: order_args, errors: errors)
        associations_args = ExtractAssociations.call(args: order_args)
        fix_address(order_args)

        self.order = Order.create(order_args)

        create_associations!(associations_args)

        return cleanup! unless persisted?

        ProcessPayment.call(args: associations_args[:stripe_token], order: order)
      end

      def validate!
        messages = OrderValidator::All.call(order_arguments).messages
        self.errors << (messages.any? ? messages : nil)
        valid?
      end

      def order_arguments
        @order_arguments ||=
          ::Orders::InputToOrderArgumentsConverter.call(
            (arguments&.to_h&.with_indifferent_access || {})['order']
          )
      end

      def fix_address(args)
        return unless args[:address].is_a?(Hash)
        address = (args[:address] || {}).with_indifferent_access
        args[:address] =
          %w(country state zipcode city street)
          .map { |k| address[k] }
          .compact
          .join(', ')
      end

      def create_associations!(args)
        CreateAssociations.call(
          args: args, order: order, errors: errors
        )
      end

      def cleanup!
        order.destroy
      end

      def response
        {
          order: order,
          persisted: persisted?,
          valid: valid?,
          paid: order&.paid?,
          errors: key_message_errors
        }
      end

      def persisted?
        order&.persisted?
      end

      def valid?
        errors.compact.empty?
      end

      def key_message_errors
        errors.compact.flat_map do |error|
          ::ErrorObjectsBuilder.call(error)
        end
      end
    end
  end
end
