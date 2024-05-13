import React from 'react'
import "../App.css"


export const ProductCards = ({name,description,image}) => {

  return (
    <div className='card'>
        <img className='image-container' src={image}/>
        <h2>{name}</h2>
        <h3> {description}</h3>
    </div>
  )
}
export default ProductCards;