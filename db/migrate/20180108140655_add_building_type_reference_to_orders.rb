class AddBuildingTypeReferenceToOrders < ActiveRecord::Migration[5.1]
  def change
    remove_column :orders, :building_type, :string
    add_reference :orders, :building_type, foreign_key: true
  end
end
