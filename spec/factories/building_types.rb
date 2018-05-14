# == Schema Information
#
# Table name: building_types
#
#  id              :integer          not null, primary key
#  name            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  deleted_at      :datetime
#  ask_for_doorman :boolean          default(FALSE), not null
#

FactoryGirl.define do
  factory :building_type do
    name 'Skyscraper'
  end
end
