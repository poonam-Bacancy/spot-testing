class ConvertIndustryToReferenceOnOrders < ActiveRecord::Migration[5.1]
  def change
    remove_column :orders, :industry, :string
    add_reference :orders, :industry, foreign_key: true
  end
end
