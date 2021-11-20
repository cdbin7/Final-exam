import React from 'react'

export default function AuctionDetails(props) {
  return (
    <>
      <h2> {props.title} </h2>
      <p>
        {props.body}
      </p>
      <p>
        Current Price: ${props.price} <br />
        Ends at: {props.end_at}
      </p>
    </>
  )
}
