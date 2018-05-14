# frozen_string_literal: true

module PrintedCupcakes
  class Base64FontEncoder < BasicService
    CONTENT_TYPE = 'application/x-font-woff'
    CHARSET = 'utf-8'

    def initialize(font)
      @font = font
    end

    def call
      return unless font
      PrintedCupcakes::Base64Encoder.call(
        font.file&.url,
        content_type: CONTENT_TYPE,
        charset: CHARSET
      )
    end

    protected

    attr_reader :font
  end
end
