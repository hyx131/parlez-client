class CreateBlacklists < ActiveRecord::Migration[5.2]
  def change
    create_table :blacklists do |t|
      t.integer :user_id

      t.timestamps
    end
  end
end
