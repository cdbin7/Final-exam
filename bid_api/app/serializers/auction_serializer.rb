class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :body,
    :price,
    :created_at,
    :updated_at,
  )

  has_many :bids
  class BidSerializer < ActiveModel::Serializer
    attributes(
      :id, :price, :created_at, :updated_at
    )
  end

end
