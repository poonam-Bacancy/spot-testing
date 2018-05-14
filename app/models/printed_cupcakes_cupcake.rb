# == Schema Information
#
# Table name: printed_cupcakes_cupcakes
#
#  id                 :integer          not null, primary key
#  printed_cupcake_id :integer          not null
#  cupcake_id         :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  deleted_at         :datetime
#

class PrintedCupcakesCupcake < ApplicationRecord
  acts_as_paranoid

  belongs_to :printed_cupcake
  belongs_to :cupcake
end
