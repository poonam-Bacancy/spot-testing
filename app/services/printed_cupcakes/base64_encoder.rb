# frozen_string_literal: true

module PrintedCupcakes
  class Base64Encoder < BasicService
    def initialize(file_url, content_type: nil, charset: nil)
      @file_url = file_url
      @content_type = content_type
      @charset = charset
    end

    def call
      return unless file_url
      url = sanitize_url(file_url)
      encode(url)
    end

    protected

    attr_reader :file_url
    attr_reader :content_type
    attr_reader :charset

    private

    def sanitize_url(url)
      PrintedCupcakes::UrlSanitizer.call(url)
    end

    def encode(url)
      puts url
      tempfile = file_from_url(url)

      [
        base64_preamble(tempfile),
        Base64.encode64(tempfile.read)
      ].join(',').strip.gsub!("\n", '')
    end

    def file_from_url(url)
      if url =~ /^http.*$/
        Down.download(url)
      else
        file = File.open(url, 'r')
        def file.content_type; nil; end
        def file.charset; nil; end
        file
      end
    end

    def base64_preamble(file)
      [
        preamble_data(file),
        preamble_charset(file),
        "base64"
      ].compact.join(';')
    end

    def preamble_data(file)
      type = file.content_type || content_type
      return unless type
      "data:#{type}"
    end

    def preamble_charset(file)
      set = file.charset || charset
      return unless charset
      "charset=#{set}"
    end
  end
end
