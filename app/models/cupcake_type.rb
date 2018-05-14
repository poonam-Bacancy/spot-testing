# == Schema Information
#
# Table name: cupcake_types
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  image_data :jsonb
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  deleted_at :datetime
#

class CupcakeType < ApplicationRecord
  include ImageUploader::Attachment.new(:image)

  acts_as_paranoid

  has_many :cupcakes

  validates :name, presence: true
  validates :image, presence: true
end
