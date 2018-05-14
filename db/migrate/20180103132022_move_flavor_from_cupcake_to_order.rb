class MoveFlavorFromCupcakeToOrder < ActiveRecord::Migration[5.1]
  def change
    remove_column :cupcakes, :cupcake_type_id, :integer, null: false

    create_table :order_cupcake_types do |t|
      t.belongs_to :order, foreign_key: true, null: false, index: true
      t.belongs_to :cupcake_type, foreign_key: true, null: false, index: true

      t.timestamps
    end
  end
end
