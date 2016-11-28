class CreateSessions < ActiveRecord::Migration
  def change
    create_table :session_tokens do |t|
      t.string :token, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :session_tokens, :token, unique: true
    add_index :session_tokens, :user_id
  end
end
