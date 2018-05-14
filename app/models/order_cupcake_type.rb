# == Schema Information
#
# Table name: order_cupcake_types
#
#  id              :integer          not null, primary key
#  order_id        :integer          not null
#  cupcake_type_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  deleted_at      :datetime
#

class OrderCupcakeType < ApplicationRecord
  acts_as_paranoid

  belongs_to :cupcake_type
  belongs_to :order
end
