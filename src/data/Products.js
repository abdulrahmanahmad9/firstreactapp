import React from 'react'
import ProductCards from '../components/ProductCards';


export const Products = () => {
  const items = [      {
    image: "https://cdn.vox-cdn.com/thumbor/6kLvmWfhU4h64EhC0S6tsn714fI=/0x0:4032x3024/1200x900/filters:focal(1694x1190:2338x1834)/cdn.vox-cdn.com/uploads/chorus_image/image/59740845/IMG_1503.42.jpg",
    name: "Cafe Latte",
    description: " Indulge in the creamy elegance Café Latte",
  },
  {
    image: "https://www.acouplecooks.com/wp-content/uploads/2022/01/Iced-Americano-008s.jpg",
    name: "Ice Americano",
    description: "Quench your thirst with Iced Americano"
  },]
  const productCards= items.map(item => (
    <ProductCards
    image={item.image}
    name={item.name}
    description={item.description}
  />
  ));
  
  return (
    <div style={{display:"flex", flexWrap:"wrap"}}> 
   {productCards}
    </div>
  )
}
export default Products;




