# == Schema Information
#
# Table name: colors
#
#  id         :integer          not null, primary key
#  value      :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  deleted_at :datetime
#

FactoryGirl.define do
  factory :color do
    name 'Eggplant'
    value '614051'
  end
end
