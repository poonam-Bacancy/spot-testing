# frozen_string_literal: true
# == Schema Information
#
# Table name: cliparts
#
#  id         :integer          not null, primary key
#  image_data :jsonb
#  name       :string           default(""), not null
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  deleted_at :datetime
#

FactoryGirl.define do
  factory :clipart do
    image_data {}
    name 'Happy'
    category 'Emoji'
  end
end
