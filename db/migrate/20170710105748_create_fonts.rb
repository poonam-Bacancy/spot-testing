class CreateFonts < ActiveRecord::Migration[5.1]
  def change
    create_table :fonts do |t|
      t.string :name, default: '', null: false, unique: true
      t.jsonb :file_data

      t.timestamps
    end
  end
end
