import React from 'react'
import { useParams } from 'react-router-dom'

function CryptoDetail() {
  const {cryptoSymbol} = useParams();
  // or {cryptoSymbol,id} = useParams() for 2 parameters

  return (
    <div>
      <h4>CryptoDetail</h4>
      <p>Symbol: {cryptoSymbol}</p>
      {/* <p>Id: {id}</p> */}
    </div>
  )
}

export default CryptoDetail