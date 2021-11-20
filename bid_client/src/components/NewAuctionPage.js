import React from 'react'
import { Auction } from '../requests';


export default function NewAuctionPage(props) {
  const createAuction= (params) => {
    Auction.create(params)
    .then((auction) => {
      props.history.push(`/auctions/${auction.id}`)
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget)
    const params = {
      title: formData.get("title"),
      body: formData.get("body"),
      end_at: formData.get("end_at"),
      price: formData.get("price")
    }
    console.log(params);
    createAuction(params);
  }


  return (
    <>
    <h1>CREATE AN AUCTION</h1>
    <form onSubmit={handleSubmit} createAuction={createAuction}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <br />
      </div>
      <div>
        <label htmlFor="body">Description</label>
        <input type="text" name="body" id="body" />
        <br />
      </div>
      <div>
        <label htmlFor="end_at">Ends at</label>
        <input type="date" name="end_at" id="end_at" />
        <br />
      </div>
      <div>
        <label htmlFor="price">Reserve Price</label>
        <input type="integer" name="price" id="price" />
        <br />
      </div>
      <div>
        <input type="submit" value="save"/>
      </div>
    </form>
    </>
  )
}
