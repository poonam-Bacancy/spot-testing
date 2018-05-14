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

class Clipart < ApplicationRecord
  include ImageUploader::Attachment.new(:image)

  acts_as_paranoid

  has_many :cupcakes

  validates :name, presence: true
  validates :category, presence: true
end
