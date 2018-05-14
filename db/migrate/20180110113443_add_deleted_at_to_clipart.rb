class AddDeletedAtToClipart < ActiveRecord::Migration[5.1]
  def change
    add_column :cliparts, :deleted_at, :datetime
    add_index :cliparts, :deleted_at

    add_column :colors, :deleted_at, :datetime
    add_index :colors, :deleted_at

    add_column :building_types, :deleted_at, :datetime
    add_index :building_types, :deleted_at

    add_column :cupcakes, :deleted_at, :datetime
    add_index :cupcakes, :deleted_at

    add_column :cupcake_types, :deleted_at, :datetime
    add_index :cupcake_types, :deleted_at

    add_column :fonts, :deleted_at, :datetime
    add_index :fonts, :deleted_at

    add_column :orders, :deleted_at, :datetime
    add_index :orders, :deleted_at

    add_column :order_cupcake_types, :deleted_at, :datetime
    add_index :order_cupcake_types, :deleted_at

    add_column :printed_cupcakes, :deleted_at, :datetime
    add_index :printed_cupcakes, :deleted_at

    add_column :printed_cupcakes_cupcakes, :deleted_at, :datetime
    add_index :printed_cupcakes_cupcakes, :deleted_at

    add_column :promotion_codes, :deleted_at, :datetime
    add_index :promotion_codes, :deleted_at
  end
end
