# frozen_string_literal: true
# == Schema Information
#
# Table name: orders
#
#  id                        :integer          not null, primary key
#  full_name                 :string           not null
#  email                     :string           not null
#  phone_number              :string           not null
#  address                   :string
#  apartment_number          :string
#  shipping_date             :date
#  shipping_method           :string           not null
#  recipient_name            :string
#  recipient_phone_number    :string
#  doorman                   :boolean          default(FALSE), not null
#  delivery_comment          :text             default(""), not null
#  delivery_starting_at      :datetime
#  delivery_ending_at        :datetime
#  gift_message              :text
#  count_cupcakes_by         :string           default("the_dozen"), not null
#  order_type                :string           default("personal"), not null
#  company                   :string
#  created_at                :datetime         not null
#  updated_at                :datetime         not null
#  shareable_images          :boolean          default(FALSE), not null
#  wrap_around_label_message :text             default(""), not null
#  pickup_time               :datetime
#  payment_data              :jsonb            not null
#  units_price               :money            not null
#  cupcake_designs_price     :money            not null
#  gift_message_price        :money            not null
#  rush_order_price          :money            not null
#  shipping_price            :money            not null
#  discount                  :money            not null
#  total                     :money            not null
#  building_type_id          :integer
#  deleted_at                :datetime
#  rush_order                :boolean          default(FALSE), not null
#  additional_notes          :text             default(""), not null
#  industry_id               :integer
#

require 'rails_helper'

RSpec.describe Order, type: :order do
  describe '#with_gitft_message?' do
    context 'order has gift message' do
      subject { build_stubbed(:order, gift_message: 'Love ya!') }

      it 'returns true' do
        expect(subject.with_gitft_message?).to eq(true)
      end
    end

    context "order doesn't have gift message" do
      subject { build_stubbed(:order, gift_message: nil) }

      it 'returns false' do
        expect(subject.with_gitft_message?).to eq(false)
      end
    end
  end
end
