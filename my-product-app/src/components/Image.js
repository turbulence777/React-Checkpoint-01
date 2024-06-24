import React from 'react';
import product from '../product';

function Image() {
  return <img src={product.imageUrl} className="card-img-top" alt={product.name} />;
}

export default Image;
