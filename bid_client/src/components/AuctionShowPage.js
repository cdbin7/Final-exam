import React, {useState, useEffect} from 'react'
import { Auction, Bid } from '../requests'
import AuctionDetails from './AuctionDetails'
import BidList from './BidList'
import NewBidForm from './NewBidForm'

export default function AuctionShowPage(props) {
  const [auction, setAuction] = useState({});
  const [bids, setBids] = useState([]);

  useEffect(()=> {
    refreshAuction();
  }, [])

  const refreshAuction = ()=>{
    Auction.show(props.match.params.id)
    .then((data) => {
      console.log(data);
      setAuction(data.auction);
      setBids(data.bids)
    })
  }

  const createBid= (params) => {
    Bid.create(params,auction.id)
    .then((data) => {
      console.log(data);
      refreshAuction();
      // props.history.push(`auctions/${data.auction_id}`)
    })
  }
  
  const {title, body, end_at, price, created_at} = auction;
  return (
    <div>
      <AuctionDetails 
        title={title}
        body={body}
        end_at={end_at}
        price={price}
        created_at={new Date(created_at)}
      />
      <NewBidForm createBid={createBid}/>
      <BidList list={bids}/>
    </div>
  )
}
