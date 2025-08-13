import React from 'react';
import './ProductScroller.css'; // We will create this file next

// Sample product data. In a real app, this would likely come from an API.
const products = [
  { id: 1, name: 'Hydrolic Jack', imageUrl: '/src/assets/jack.png' },
  { id: 2, name: 'Bulldozer', imageUrl: 'https://w7.pngwing.com/pngs/781/419/png-transparent-jcb-backhoe-loader-engineering-construction-machine-mode-of-transport-engineering-vehicle-thumbnail.png' },
  { id: 3, name: 'Crane', imageUrl: 'https://w7.pngwing.com/pngs/781/419/png-transparent-jcb-backhoe-loader-engineering-construction-machine-mode-of-transport-engineering-vehicle-thumbnail.png' },
  { id: 4, name: 'Dump Truck', imageUrl: 'https://w7.pngwing.com/pngs/781/419/png-transparent-jcb-backhoe-loader-engineering-construction-machine-mode-of-transport-engineering-vehicle-thumbnail.png' },

];

export default function ProductScroller() {
  // The magic for the seamless loop is to duplicate the product list.
  const extendedProducts = [...products, ...products];

  return (
    <div className="product-scroller mt-5">
      <div className="scroller-inner">
        {extendedProducts.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.imageUrl} alt={product.name} />
            <p className="product-name">{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}