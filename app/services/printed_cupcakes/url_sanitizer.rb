# frozen_string_literal: true

module PrintedCupcakes
  class UrlSanitizer < BasicService
    def initialize(url)
      @url = url
    end

    def call
      return unless url

      if url =~ /^http.*$/
        url
      else
        [Rails.root.join('public'), url].join('')
      end
    end

    protected

    attr_reader :url
  end
end
