# frozen_string_literal: true

module JWT
  class UserEncoder < BasicService
    ISSUER = 'spots-nyc'

    def initialize(user:)
      @user = user
    end

    def call
      Encoder.call(payload: payload)
    end

    protected

    attr_reader :user

    private

    def payload
      {
        id: user.id,
        email: user.email
      }.merge(jwt_specific_params)
    end

    def jwt_specific_params
      {
        iss: ISSUER,
        iat: Time.now.to_i,
        # exp: 1.month.from_now.to_i
      }
    end
  end
end
