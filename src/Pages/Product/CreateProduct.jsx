import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateProduct() {

  const navigate = useNavigate();

  return (
    <div>CreateProduct
      <button onClick={ ()=> {
        navigate(-1) //1 page back
      } }>Bo back</button>
    </div>
  )
}

export default CreateProduct