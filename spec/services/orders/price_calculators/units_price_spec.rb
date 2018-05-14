# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Orders::PriceCalculators::UnitsPrice, type: :service do
  describe '#call' do
    context 'quantity not possible with counting method :the_dozen' do
      let(:order_args) do
        {
          count_cupcakes_by: 'the_dozen',
          cupcakes: [{ quantity: 13 }]
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'raises an NonIntegerUnitCount error' do
        expect do
          subject.call
        end.to(
          raise_error(Orders::PriceCalculators::Errors::NonIntegerUnitCount)
        )
      end
    end

    context 'quantity not possible with counting method :packs_of_four' do
      let(:order_args) do
        {
          count_cupcakes_by: 'packs_of_four',
          cupcakes: [{ quantity: 13 }]
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'raises an NonIntegerUnitCount error' do
        expect do
          subject.call
        end.to(
          raise_error(Orders::PriceCalculators::Errors::NonIntegerUnitCount)
        )
      end
    end

    context 'unknown counting method' do
      let(:order_args) do
        {
          count_cupcakes_by: 'foo',
          cupcakes: [{ quantity: 13 }]
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'raises an InvalidCountAttribute error' do
        expect do
          subject.call
        end.to(
          raise_error(Orders::PriceCalculators::Errors::InvalidCountAttribute)
        )
      end
    end

    context 'no counting method' do
      let(:order_args) do
        {
          cupcakes: [{ quantity: 13 }]
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'raises an InvalidCountAttribute error' do
        expect do
          subject.call
        end.to(
          raise_error(Orders::PriceCalculators::Errors::InvalidCountAttribute)
        )
      end
    end

    context 'no cupcakes' do
      let(:order_args) do
        {
          count_cupcakes_by: 'packs_of_four'
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 0' do
        expect(subject.call).to eq(0.0)
      end
    end

    context 'cupcakes with no quantity' do
      let(:order_args) do
        {
          count_cupcakes_by: 'packs_of_four',
          cupcakes: [{}]
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 0' do
        expect(subject.call).to eq(0.0)
      end
    end

    context '24 cupcakes counted by the dozen' do
      let(:order_args) do
        {
          count_cupcakes_by: 'the_dozen',
          cupcakes: [{ quantity: 24 }]
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 50.0' do
        expect(subject.call).to eq(50.0)
      end
    end

    context '24 cupcakes counted as packs of four' do
      let(:order_args) do
        {
          count_cupcakes_by: 'packs_of_four',
          cupcakes: [{ quantity: 24 }]
        }.with_indifferent_access
      end

      subject { described_class.new(order_args) }

      it 'returns 60.0' do
        expect(subject.call).to eq(60.0)
      end
    end
  end
end
