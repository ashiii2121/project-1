import React from 'react';
import './Fruits.css';
import { useCart } from '../../pages/Context/Cartcontext';

const fruits = [
  {
    id: 1,
    name: 'Apple',
    price: '₹199 / kg',
    image: 'https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-fresh-apple-fruit-red-png-image_10203073.png',
  },
  {
    id: 2,
    name: 'Banana',
    price: '₹60 / kg',
    image: '/images/banana.jpg',
  },
  {
    id: 3,
    name: 'Orange',
    price: '₹60 / kg',
    image: '/images/orange.jpg',
  },
  {
    id: 4,
    name: 'Mango',
    price: '₹100 / kg',
    image: '/images/mango.jpg',
  },

  {
    id: 5,
    name: 'Pineapple',
    price: '₹50 / kg',
    image: '/images/pineapple.jpg',
  },

  {
    id: 6,
    name: 'Kiwi',
    price: '₹120 / kg',
    image: '/images/kiwi.jpg',
  },
  {
    id: 7,
    name: 'Strawberry',
    price: '₹180 / kg',
    image: '/images/strawberry.jpg',
  },
  {
    id: 8,
    name: 'Papaya',
    price: '₹45 / kg',
    image: '/images/papaya.jpg',
  },
  {
    id: 9,
    name: 'Watermelon',
    price: '₹40 / kg',
    image: '/images/watermelon.jpg',
  },
  {
    id: 10,
    name: 'Grapes',
    price: '₹100 / kg',
    image: '/images/grape.jpg',
  },

];

function FruitsPage() {
  const { addToCart } = useCart()

  return (
    <div className="fruits-container">
      <h1>Organic Fruits</h1>
      <div className="fruit-grid">
        {fruits.map(fruit => (
          <div key={fruit.id} className="fruit-card">
            <img src={fruit.image} alt={fruit.name} />
            <h3>{fruit.name}</h3>
            <p>{fruit.price}</p>
            <button onClick={() => addToCart(fruit)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FruitsPage;
