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

class Order < ApplicationRecord
  SHIPPING_METHODS = %i[pickup manhattan_delivery shipping].deep_freeze
  ORDER_TYPE = %i[personal corporate].deep_freeze
  COUNT_CUPCAKES_BY = %i[the_dozen packs_of_four].deep_freeze
  UNIT_SIZES = {
    the_dozen: 12,
    packs_of_four: 4
  }.deep_freeze
  UNIT_PRICES = {
    the_dozen: 25.0,
    packs_of_four: 10.0
  }.deep_freeze
  RUSH_ORDER_PRICE = 15.0
  FREE_CUPCAKE_DESIGNS_COUNT = 4

  acts_as_paranoid

  enum shipping_method: SHIPPING_METHODS.zip(SHIPPING_METHODS.map(&:to_s)).to_h
  enum order_type: ORDER_TYPE.zip(ORDER_TYPE.map(&:to_s)).to_h
  enum count_cupcakes_by: COUNT_CUPCAKES_BY.zip(COUNT_CUPCAKES_BY.map(&:to_s)).to_h

  belongs_to :promotion_code, optional: true
  belongs_to :building_type, optional: true
  belongs_to :industry, optional: true

  has_many :cupcakes, dependent: :destroy
  has_many :order_cupcake_types, dependent: :destroy
  has_many :cupcake_types, through: :order_cupcake_types

  def with_gitft_message?
    gift_message.present? || wrap_around_label_message.present?
  end

  def paid?
    return true if total.zero?
    payment_data.map { |payment| payment['paid'] }.include?(true)
  end
end
