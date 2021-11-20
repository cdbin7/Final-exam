import React from 'react'
import { Bid } from '../requests'

export default function NewBidForm(props) {



  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = {
      price: formData.get("price")
    }
    console.log(params);
    props.createBid(params)
  }



  return (
    <form onSubmit={handleSubmit}>
      <input type="integer" name="price" id="price" />
      <input type="submit" value="Bid"/>
    </form>
  )
}
