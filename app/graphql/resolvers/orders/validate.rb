# frozen_string_literal: true

module Resolvers
  module Orders
    class Validate < BaseResolver
      def call
        validate!
        response
      end

      protected

      attr_accessor :order
      attr_accessor :errors

      private

      def validate!
        validation = validator.call(normalized_arguments)
        self.order = validation.output
        self.errors = validation.messages
      end

      def validator
        raise('Validator not implemented')
      end

      def order_hash
        return {} unless arguments
        arguments.to_h['order']
      end

      def normalized_arguments
        @normalized_arguments ||= begin
          return {} unless arguments
          hash = HashSnakeCaser.call(order_hash)
          hash.with_indifferent_access
        end
      end

      def downcase_value_of(hash, key)
        return unless hash
        return unless hash[key]
        return unless hash[key].respond_to?(:downcase)
        hash[key] = hash[key].downcase
      end

      def response
        {
          errors: key_message_errors,
          valid: errors.nil? || errors.empty?
        }
      end

      def key_message_errors
        ErrorObjectsBuilder.call(errors)
      end
    end
  end
end
