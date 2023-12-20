import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating, max_price}) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data laye
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        max_price: max_price,
        rating: rating,
      },
    });
  };

  return (
    <div className='product' >

      <img src={image} alt=""/>
      <div className='product__info' >
       <h5>{title}</h5>
       <div className='product__rating'>
        {Array(rating)
            .fill()
            .map((_, i) => (
                <p>⭐</p>
            ))}
       </div>
       <p className='product__price'>
        <small className='indian__rupee'>₹</small>
        <strong className='price'>{price}</strong>
        <small className='indian__rupee'>00</small>
       </p>
       <p className='max__price'>{max_price}</p>
       
      </div>

      
      
        <button onClick={addToBasket}>Add to Cart</button>
        {/* <button onClick={addToBasket}>Buy Now</button> */}
      
    </div>
  );
}

export default Product;
