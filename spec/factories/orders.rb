# frozen_string_literal: true
# == Schema Information
#
# Table name: orders
#
#  id                        :integer          not null, primary key
#  full_name                 :string           not null
#  email                     :string           not null
#  phone_number              :string           not null
#  address                   :string
#  apartment_number          :string
#  shipping_date             :date
#  shipping_method           :string           not null
#  recipient_name            :string
#  recipient_phone_number    :string
#  doorman                   :boolean          default(FALSE), not null
#  delivery_comment          :text             default(""), not null
#  delivery_starting_at      :datetime
#  delivery_ending_at        :datetime
#  gift_message              :text
#  count_cupcakes_by         :string           default("the_dozen"), not null
#  order_type                :string           default("personal"), not null
#  company                   :string
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#  shareable_images          :boolean          default(FALSE), not null
#  wrap_around_label_message :text             default(""), not null
#  pickup_time               :datetime
#  payment_data              :jsonb            not null
#  units_price               :money            not null
#  cupcake_designs_price     :money            not null
#  gift_message_price        :money            not null
#  rush_order_price          :money            not null
#  shipping_price            :money            not null
#  discount                  :money            not null
#  total                     :money            not null
#  building_type_id          :integer
#  deleted_at                :datetime
#  rush_order                :boolean          default(FALSE), not null
#  additional_notes          :text             default(""), not null
#  industry_id               :integer
#

FactoryGirl.define do
  factory :order do
    total 100
    discount 0
    units_price 70
    cupcake_designs_price 10
    rush_order_price 0
    shipping_price 20
    full_name 'John Doe'
    email 'john.doe@email.test'
    phone_number '0000000000'
    address 'Somewhere 13'
    apartment_number '13B'
    shipping_date 3.days.from_now
    shipping_method 'manhattan_delivery'
    recipient_name 'John Doe'
    recipient_phone_number '0000000000'
    doorman true
    association :building_type, factory: :building_type
    delivery_starting_at 3.days.from_now
    delivery_ending_at 4.days.from_now
    gift_message 'I love ya'
    count_cupcakes_by 'the_dozen'
    order_type 'personal'
    shareable_images true
  end
end
