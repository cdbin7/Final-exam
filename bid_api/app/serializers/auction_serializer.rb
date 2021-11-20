class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :body,
    :price,
    :end_at
  )

  belongs_to :user
  class UserSerializer < ActiveModel::Serializer
    attributes(
      :id,
      :full_name,
      :email
    )
  end



  has_many :bids
  class BidSerializer < ActiveModel::Serializer
    attributes(
      :id, :price, :created_at, :updated_at
    )
  end

end
