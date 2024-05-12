import React from 'react'

const data = [
    {
      name: 'cookies ',
      image: <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-Co8Tub0uxqvr2-4q3ckcnZbW0IjJq3C0VR4Z_zrsQ&s'/>,
      price: 10.99
    },
    {
      name: 'Coffee Mug',
      image: <img src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-Co8Tub0uxqvr2-4q3ckcnZbW0IjJq3C0VR4Z_zrsQ&s'/>,
      price: 7.99
    }
  ];

export const Products = ({name,price,image}) => {
  return (
    <div> 
     <h1> {name}</h1>
    <h4>{price}</h4>
    <img src= {image}/>
    </div>
  )
}
export default Products;




