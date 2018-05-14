# frozen_string_literal: true
# == Schema Information
#
# Table name: promotion_codes
#
#  id         :integer          not null, primary key
#  code       :string           not null
#  expires_at :datetime
#  kind       :string           default("total_order_discount"), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  deleted_at :datetime
#

require 'rails_helper'

RSpec.describe PromotionCode, type: :order do
  describe '#expired?' do
    context 'expiery date in the past' do
      subject { build_stubbed(:promotion_code, expires_at: 3.days.ago) }

      it 'returns true' do
        expect(subject.expired?).to eq(true)
      end
    end

    context 'expiery date in the future' do
      subject { build_stubbed(:promotion_code, expires_at: 3.days.from_now) }

      it 'returns false' do
        expect(subject.expired?).to eq(false)
      end
    end

    context 'expiery date not set' do
      subject { build_stubbed(:promotion_code, expires_at: nil) }

      it 'returns false' do
        expect(subject.expired?).to eq(false)
      end
    end
  end
end
