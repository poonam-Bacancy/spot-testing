# == Schema Information
#
# Table name: fonts
#
#  id         :integer          not null, primary key
#  name       :string           default(""), not null
#  file_data  :jsonb
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  deleted_at :datetime
#

class Font < ApplicationRecord
  include FileUploader::Attachment.new(:file)

  acts_as_paranoid

  has_many :cupcakes

  validates :name, presence: true
  validates :file, presence: true
end
