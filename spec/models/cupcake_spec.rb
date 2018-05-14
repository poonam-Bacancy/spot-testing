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

require 'rails_helper'

RSpec.describe Cupcake, type: :order do
  describe '#type' do
    context 'message type' do
      subject { build_stubbed(:cupcake, kind: 'message', message: 'Love ya!') }

      it 'returns :message' do
        expect(subject.type).to eq(:message)
      end
    end

    context 'clipart type' do
      subject do
        build_stubbed(:cupcake, message: '', kind: 'clipart', clipart: build_stubbed(:clipart))
      end

      it 'returns :clipart' do
        expect(subject.type).to eq(:clipart)
      end
    end

    context 'image type' do
      subject { build_stubbed(:cupcake, kind: 'image', message: '', image_data: {}) }

      it 'returns :image' do
        expect(subject.type).to eq(:image)
      end
    end
  end
end
