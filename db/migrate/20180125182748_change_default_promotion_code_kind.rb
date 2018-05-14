class ChangeDefaultPromotionCodeKind < ActiveRecord::Migration[5.1]
  def change
    change_column :promotion_codes, :kind, :string, null: false, default: 'percentage'
  end
end
