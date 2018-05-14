# frozen_string_literal: true
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

FactoryGirl.define do
  factory :promotion_code do
    code 'test'
    kind 'free_order'
  end
end
