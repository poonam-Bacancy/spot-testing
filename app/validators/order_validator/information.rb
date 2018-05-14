# frozen_string_literal: true

OrderValidator::Information = Dry::Validation.Schema do
  configure do
    config.messages_file = Rails.root.join('config', 'errors.yml')
    predicates(Predicates)
  end

  optional(:gift_message).filled
  optional(:wrap_around_label_message).filled

  required(:order_type)
    .filled(:str?)
    .value(included_in?: ::Order::ORDER_TYPE.map(&:to_s))
    .when(eql?: 'corporate') do
      value(:company).filled?.str?
      optional(:industry_id).filled(:industry_id?)
    end

  required(:shipping_method)
    .value(included_in?: ::Order::SHIPPING_METHODS.map(&:to_s))
    .when(eql?: 'pickup') do
      required(:pickup_time).filled(:time?)
    end
    .when(eql?: 'shipping') do
      required(:address).filled
    end
    .when(eql?: 'manhattan_delivery') do
      required(:address).schema(OrderValidator::Address)
      required(:recipient_name).filled(:str?)
      required(:recipient_phone_number).filled
      optional(:doorman).filled(:bool?)
      required(:building_type_id).filled(:building_type_id?)
      optional(:deliver_comment).filled(:str?)
      required(:delivery_starting_at).filled(:time?)
      required(:delivery_ending_at).filled(:time?)
    end
end
