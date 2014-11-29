class CreateByos < ActiveRecord::Migration
  def change
    create_table :byos do |t|
      t.string :id, null: false
      t.string :pw, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :byos, :id, unique: true
    add_index :byos, :name, unique: true
  end
end
