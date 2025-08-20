import React from 'react';
import './ProductScroller.css';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Pallete trolley',
    imageUrl: '../../src/assets/jack.png',
    description: 'Used to transport pallets in warehouses efficiently.'
  },
  {
    id: 2,
    name: 'Cone Type Pipe Roller',
    imageUrl: '/src/assets/4.png',
    description: 'Helps support and guide pipes during laying operations.'
  },
  {
    id: 3,
    name: 'Pipe Lowering Roller',
    imageUrl: '/src/assets/6.png',
    description: 'Used during pipe lowering processes in trenching.'
  },
  {
    id: 4,
    name: 'Beam Clamp Rigging Roller',
    imageUrl: '/src/assets/5.png',
    description: 'Mounts to beams to allow pipe rigging operations.'
  },
  {
    id: 5,
    name: 'Multidirectional Pipe Roller',
    imageUrl: '/src/assets/7.png',
    description: 'Allows movement of pipes in multiple directions.'
  },
  {
    id: 6,
    name: 'Pipe Roller',
    imageUrl: '/src/assets/8.png',
    description: 'Basic support for moving and guiding pipes.'
  },
  {
    id: 7,
    name: 'Pipe Lowering Belt',
    imageUrl: '/src/assets/9.png',
    description: 'Heavy-duty belts used for lowering pipes into trenches.'
  }
];

export default function ProductScroller() {
  const extendedProducts = [...products, ...products]; // optional seamless scroll

  return (
    <div className="product-scroller mt-5">
      <div className="scroller-inner">
        {extendedProducts.map((product, index) => (
          <Link
            to={`/products/${product.id}`}
            state={{ product }}
            className="product-item"
            key={index}
          >
            <img src={product.imageUrl} alt={product.name} />
            <p className="product-name">{product.name}</p>
            
          </Link>
        ))}
      </div>
    </div>
  );
}
