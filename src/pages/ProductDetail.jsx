import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ProductDetail() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>Product not found</h2>
        <p>Please go back and select a product from the list.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      <div style={{ flex: 1 }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </div>
      <div style={{ flex: 2 }}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
