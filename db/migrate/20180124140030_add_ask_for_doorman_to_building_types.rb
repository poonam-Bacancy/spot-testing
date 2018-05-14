class AddAskForDoormanToBuildingTypes < ActiveRecord::Migration[5.1]
  def change
    add_column :building_types, :ask_for_doorman, :boolean, null: false, default: false
  end
end
