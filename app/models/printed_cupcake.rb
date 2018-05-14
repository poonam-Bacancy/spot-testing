# == Schema Information
#
# Table name: printed_cupcakes
#
#  id         :integer          not null, primary key
#  pdf_data   :jsonb
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  deleted_at :datetime
#

class PrintedCupcake < ApplicationRecord
  include FileUploader::Attachment.new(:pdf)

  acts_as_paranoid

  has_one :printed_cupcakes_cupcake
  has_one :cupcake, through: :printed_cupcakes_cupcake
end
