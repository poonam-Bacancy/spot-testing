class CreateColors < ActiveRecord::Migration[5.1]
  def change
    create_table :colors do |t|
      t.string :value, null: false
      t.string :name, null: false

      t.timestamps
    end
  end
end
