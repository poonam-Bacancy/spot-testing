# frozen_string_literal: true

module JWT
  class Encoder < Coder
    def initialize(payload:)
      @payload = payload
    end

    def call
      JWT.encode(
        payload,
        SECRET,
        ALGORITHM
      )
    end

    protected

    attr_reader :payload
  end
end
