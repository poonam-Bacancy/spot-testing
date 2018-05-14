# frozen_string_literal: true

module Orders
  class InputToOrderArgumentsConverter < BasicService
    def initialize(arguments)
      @arguments = arguments
    end

    def call
      return unless arguments
      args = arguments.dup.to_h
      args = snake_cased_hash(args)
      downacase_values(args)
      args
    end

    protected

    attr_reader :arguments

    private

    def snake_cased_hash(args)
      HashSnakeCaser
        .call(args)
        .with_indifferent_access
    end

    def downacase_values(hash)
      downcase_value(hash, :order_type)
      downcase_value(hash, :shipping_method)
      downcase_value(hash, :count_cupcakes_by)
      downcase_array_values(hash, :cupcakes, :type)
    end

    def downcase_value(hash, key)
      return unless hash
      return unless hash[key]
      hash[key] = hash[key].downcase
    end

    def downcase_array_values(hash, key, keys)
      return unless hash[key]
      return unless hash[key].is_a?(Array)
      keys = Array(keys)

      hash[key].each do |object|
        keys.each do |object_key|
          downcase_value(object, object_key)
        end
      end
    end
  end
end
