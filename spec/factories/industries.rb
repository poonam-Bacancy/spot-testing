# == Schema Information
#
# Table name: industries
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  deleted_at :datetime
#

FactoryGirl.define do
  factory :industry do
    name "MyString"
  end
end
