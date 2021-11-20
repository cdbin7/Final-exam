import React, {useState, useEffect} from 'react'
import { Auction } from '../requests'
import { Link } from 'react-router-dom'


export default function AuctionIndexPage() {
  const [auctions, setAuctions] = useState([])

  useEffect(() => {
    Auction.index()
        .then((auctionsData) => {
            setAuctions(auctionsData);
        })
}, [])


  return (
    <div>
      {auctions.map((e) => {
        return (
          <>
          <h1 key={e.id}> <Link to={`auctions/${e.id}`}>{e.title}</Link></h1>
          <h2>posted on{e.created_at.toLocaleString()}</h2>
          </>
        )
      })}
    </div>
  )
}
