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

require 'rails_helper'

RSpec.describe Color, type: :model do
  subject { build_stubbed(:color, value: 'ffffff', name: 'white') }

  describe '#hex' do
    it "returns the color's HEX value" do
      expect(subject.hex).to eq('#ffffff')
    end
  end
end
