class AddPromotionCodeToOrders < ActiveRecord::Migration[5.1]
  def change
    add_reference :orders, :promotion_code, foreign_key: true
  end
end
