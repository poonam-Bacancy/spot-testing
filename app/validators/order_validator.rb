# frozen_string_literal: true

module OrderValidator
end

class OrderValidator::All < BasicService
  class Result
    attr_accessor :messages
    attr_accessor :output

    def initialize(output, messages)
      self.output = output
      self.messages = messages
    end

    def success?
      messages.empty?
    end

    def failure?
      !success?
    end

    def camel_cased_messages
      messages.each_with_object({}) do |(key, value), object|
        object[key.to_s.camelize(:lower)] = value
      end
    end
  end

  VALIDATORS = [
    OrderValidator::PersonalInformation,
    OrderValidator::Information,
    OrderValidator::Personalization,
    OrderValidator::Overview,
    OrderValidator::Payment
  ].freeze

  def initialize(object)
    @object = object
  end

  def call
    messages = {}

    output = VALIDATORS.inject(object.dup) do |result, validator|
      result = validator.call(object)
      messages.merge!(result.messages)
      result.output
    end

    build_result(output, messages)
  end

  protected

  attr_reader :object

  private

  def build_result(output, messages)
    Result.new(output, messages)
  end
end
