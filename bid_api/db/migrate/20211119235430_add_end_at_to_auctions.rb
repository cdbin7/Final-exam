class AddEndAtToAuctions < ActiveRecord::Migration[6.1]
  def change
    add_column :auctions, :end_at, :datetime
  end
end
