import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

// ProductCard Component
const ProductCard = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>{description}</p>
    </div>
  );
};

// ProductList Component
const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

// App Component
const App = () => {
  const products = [
    { name: 'Laptop', price: '$999', description: 'A high-performance laptop' },
    { name: 'Smartphone', price: '$799', description: 'A latest-model smartphone' },
    { name: 'Headphones', price: '$199', description: 'Noise-cancelling headphones' },
  ];

  return (
    <div className="App">
      <h1>Product Showcase</h1>
      <ProductList products={products} />
    </div>
  );
};

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
