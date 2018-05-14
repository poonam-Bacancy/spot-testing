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

class Industry < ApplicationRecord
  acts_as_paranoid

  has_many :orders
end
