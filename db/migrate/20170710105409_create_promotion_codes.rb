class CreatePromotionCodes < ActiveRecord::Migration[5.1]
  def change
    create_table :promotion_codes do |t|
      t.string :code, null: false, unique: true
      t.datetime :expires_at
      t.string :kind, default: 'total_order_discount', null: false

      t.timestamps
    end
  end
end
