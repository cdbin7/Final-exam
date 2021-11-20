class Api::V1::AuctionsController < Api::ApplicationController
  before_action :find_auction, except: [:index, :create]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    auctions = Auction.order(created_at: :desc)
    render(json: auctions, each_serializer: AuctionCollectionSerializer)
  end

  def show
    bids = Bid.order(price: :desc)
    if @auction
      render json:{auction: @auction, bids: bids}
    else
      render json: { error: "Auction Not Found" }
    end
  end

  def create
    auction = Auction.new(params.require(:auction).permit(:title, :body, :price, :end_at))
    auction.user = current_user
    if auction.save
      render json: {id: auction.id}
    else
      render json: {errors: auction.errors, status:422}
    end
  end

  private
  def find_auction
    @auction = Auction.find_by_id(params[:id])
  end

end
