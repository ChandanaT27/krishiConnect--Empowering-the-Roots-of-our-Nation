import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-category">{product.category}</div>
      <h3>{product.name}</h3>
      <div className="product-price">${product.price.toFixed(2)}</div>
      <p>{product.description}</p>
      <div className="farmer-name">Sold by: {product.farmerName}</div>
    </div>
  );
};

export default ProductCard;
