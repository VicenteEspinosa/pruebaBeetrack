class CreateTrucks < ActiveRecord::Migration[6.1]
  def change
    create_table :trucks do |t|
      t.string :license
      t.integer :lat
      t.integer :long

      t.timestamps
    end
  end
end
