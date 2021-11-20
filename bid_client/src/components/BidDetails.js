import React from 'react'

export default function BidDetails(props) {
  const {price, created_at} = props;
  return (
    <div>
      <span>${price} </span>
        on {created_at}
    </div>
  )
}
