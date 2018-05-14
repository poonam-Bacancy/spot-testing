# frozen_string_literal: true

module Resolvers
  class BaseResolver
    def self.call(object, arguments, context)
      new(object, arguments, context).call
    end

    def initialize(object, arguments, context)
      @object = object
      @arguments = arguments
      @context = context
    end

    def call
      raise(NotImplemented)
    end

    protected

    attr_reader :object
    attr_reader :arguments
    attr_reader :context
  end
end
