import React from 'react'
import { useNavigate, Link, Navigate } from 'react-router-dom'
import { useState } from 'react';

function Product() {

  const navigate = useNavigate();

  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  })

  return (
    <div> Product
      
      {/* Navigate using useNavigate */}
      <button onClick={ () => {navigate("/product/create")} }>Add Product (useNavigate)</button>

      {/* Navigate using <Link> component */}
      <Link to={'/product/details/005'} >
        <button>Product detail - 005 (Link)</button>
      </Link>

      {/* Navigate using useState & <Navigate> component */}
      { goToProduct && <Navigate to="/product/details/003"></Navigate> }
      <button onClick={ () => {
        setGoToProduct( {goToProduct:true} ) } 
      }>Product detail - 003 (useState)</button>
    </div>
  )
}

export default Product