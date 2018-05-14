class AddAmountToPromotionCodes < ActiveRecord::Migration[5.1]
  def change
    add_column :promotion_codes, :amount, :float
  end
end
