# frozen_string_literal: true

class ErrorObjectsBuilder < BasicService
  Error = Struct.new(:key, :index, :messages, :suberrors)

  def initialize(errors, camelize_keys = true)
    @errors = errors
    @camelize_keys = camelize_keys
  end

  def call
    return [] unless errors
    errors.map { |key, messages| build_error(key, messages) }
  end

  protected

  attr_reader :errors
  attr_reader :camelize_keys

  private

  def build_error(key, messages)
    index = nil
    suberrors = nil

    if messages.is_a?(Hash)
      suberrors =
        messages.map { |subkey, submessages| build_error(subkey, submessages) }
      messages = nil
    end

    if key.class == Integer
      index = key.dup
      key = nil
    else
      key = camelize_key(key)
    end

    Error.new(key, index, messages && Array(messages), suberrors)
  end

  def camelize_key(key)
    return key unless camelize_keys
    return key unless key.respond_to?(:to_s)
    key.to_s.camelize(:lower)
  end
end
