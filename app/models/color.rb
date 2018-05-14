# == Schema Information
#
# Table name: colors
#
#  id         :integer          not null, primary key
#  value      :string           not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  deleted_at :datetime
#

class Color < ApplicationRecord
  VALUE_REGEX = /([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?\b/
  acts_as_paranoid

  before_validation :remove_hashtag
  validates :name, presence: true
  validates :value, presence: true
  validates_format_of :value, with: VALUE_REGEX

  def hex
    "##{value}"
  end

  private

  def remove_hashtag
    val = value.scan(/^\s*#\s*(.+)/).first&.first
    self.value = val
  end
end
