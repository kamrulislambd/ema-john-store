import React from "react";
import './Product.css';

const Product = ({ handleAddtoCart, product }) => {
  const { name, img, price, seller, ratings } = product;
  return (
    <div className="single-product">
      <img src={img} alt="product" />
      <div className="product-info">
        <h3>{name}</h3>
        <h4>Price : ${price}</h4>
        <p>Manufacturer : {seller}</p>
        <p>Ratings : {ratings} stars</p>
      </div>
      <button onClick={()=> handleAddtoCart(product)} className="cart-btn">
          <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
