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

class BuildingType < ApplicationRecord
  acts_as_paranoid

  validates :name, presence: true
end
