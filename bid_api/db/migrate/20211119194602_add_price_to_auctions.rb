class AddPriceToAuctions < ActiveRecord::Migration[6.1]
  def change
    add_column :auctions, :price, :integer
  end
end
