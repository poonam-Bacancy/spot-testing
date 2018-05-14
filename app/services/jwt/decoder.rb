# frozen_string_literal: true

module JWT
  class Decoder < Coder
    def initialize(token:)
      @token = token
    end

    def call
      JWT.decode(
        token,
        SECRET,
        true,
        algorithm: ALGORITHM
      )
    end

    protected

    attr_reader :token
  end
end
