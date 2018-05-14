class CreateCliparts < ActiveRecord::Migration[5.1]
  def change
    create_table :cliparts do |t|
      t.jsonb :image_data
      t.string :name, default: '', null: false, index: true, unique: true
      t.string :category, null: false

      t.timestamps
    end
  end
end
