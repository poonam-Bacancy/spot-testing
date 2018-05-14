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

class Cupcake < ApplicationRecord
  MEDIUM_TYPE = %i[image clipart message].deep_freeze
  TEXT_SIZES = %i[small medium large].deep_freeze

  include ImageUploader::Attachment.new(:image)

  acts_as_paranoid

  has_one :printed_cupcakes_cupcake, -> { with_deleted }
  has_one :printed_cupcake, through: :printed_cupcakes_cupcake

  belongs_to :order, -> { with_deleted }
  belongs_to :clipart, -> { with_deleted }, optional: true
  belongs_to :font, -> { with_deleted }, optional: true

  def type
    return :message if kind == 'message'
    return :clipart if clipart
    :image
  end

  def font_options
    (super || {}).with_indifferent_access
  end

  def text_size
    return unless font_options[:size]
    return unless TEXT_SIZES.map(&:to_s).include?(font_options[:size])
    font_options[:size]
  end

  def curved?
    font_options[:curved]
  end

  def color
    font_options[:color]
  end

  def first_line
    font_options[:first_line]
  end

  def second_line
    font_options[:second_line]
  end

  def third_line
    font_options[:third_line]
  end
end
