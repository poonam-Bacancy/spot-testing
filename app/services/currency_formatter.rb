# frozen_string_literal: true

class CurrencyFormatter < BasicService
  NumberHelper = Object.new.extend(ActionView::Helpers::NumberHelper)

  attr_reader :number

  def initialize(number)
    @number = number
  end

  def call
    NumberHelper.number_to_currency(
      number,
      separator: '.',
      delimiter: ',',
      format: '$%n'
    )
  end
end
