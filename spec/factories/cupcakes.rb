# frozen_string_literal: true
# == Schema Information
#
# Table name: cupcakes
#
#  id           :integer          not null, primary key
#  kind         :string           default("image"), not null
#  image_data   :jsonb
#  clipart_id   :integer
#  message      :text
#  font_id      :integer
#  font_options :jsonb            not null
#  quantity     :integer          default(0), not null
#  order_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  deleted_at   :datetime
#

FactoryGirl.define do
  factory :cupcake do
    kind 'message'
    message 'Hello World!'
    quantity 12
  end
end
