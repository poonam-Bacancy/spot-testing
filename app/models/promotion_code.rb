# == Schema Information
#
# Table name: promotion_codes
#
#  id         :integer          not null, primary key
#  code       :string           not null
#  expires_at :datetime
#  kind       :string           default("total_order_discount"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  deleted_at :datetime
#

class PromotionCode < ApplicationRecord
  KINDS = %i[
    percentage
    fixed_amount
    free_shipping
    free_designs
    free_gift_message
    free_rush_order
    free_order
  ].deep_freeze

  acts_as_paranoid

  enum kind: KINDS.zip(KINDS.map(&:to_s)).to_h

  validates :code, presence: true
  validates :kind, presence: true

  def expired?
    return false if expires_at.nil?
    expires_at < Time.now
  end
end
