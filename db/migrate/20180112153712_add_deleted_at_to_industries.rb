class AddDeletedAtToIndustries < ActiveRecord::Migration[5.1]
  def change
    add_column :industries, :deleted_at, :datetime
  end
end
