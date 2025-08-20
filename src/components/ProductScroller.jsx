import React from 'react';
import './ProductScroller.css';
import { Link } from 'react-router-dom';
import jack from '../assets/jack.png';
import img4 from '../assets/4.png';
import img6 from '../assets/6.png';
import img5 from '../assets/5.png';
import img7 from '../assets/7.png';
import img8 from '../assets/8.png';
import img9 from '../assets/9.png';
const products = [
  {
    id: 1,
    name: 'Pallete trolley',
    imageUrl: jack,
    description: 'Used to transport pallets in warehouses efficiently.'
  },
  {
    id: 2,
    name: 'Cone Type Pipe Roller',
    imageUrl: img4,
    description: 'Helps support and guide pipes during laying operations.'
  },
  {
    id: 3,
    name: 'Pipe Lowering Roller',
    imageUrl: img6,
    description: 'Used during pipe lowering processes in trenching.'
  },
  {
    id: 4,
    name: 'Beam Clamp Rigging Roller',
    imageUrl: img5,
    description: 'Mounts to beams to allow pipe rigging operations.'
  },
  {
    id: 5,
    name: 'Multidirectional Pipe Roller',
    imageUrl: img7,
    description: 'Allows movement of pipes in multiple directions.'
  },
  {
    id: 6,
    name: 'Pipe Roller',
    imageUrl: img8,
    description: 'Basic support for moving and guiding pipes.'
  },
  {
    id: 7,
    name: 'Pipe Lowering Belt',
    imageUrl: img9,
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
