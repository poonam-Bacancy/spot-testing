module ApplicationHelper
  def format_money(number)
    CurrencyFormatter.call(number)
  end

  def pdf_url(url)
    PrintedCupcakes::UrlSanitizer.call(url)
  end

  def base64_encoded_font(font)
    PrintedCupcakes::Base64FontEncoder.call(font)
  end
end
