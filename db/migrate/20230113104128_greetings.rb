class Greetings < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings do |t|
      t.string :name
    end
  end
end
