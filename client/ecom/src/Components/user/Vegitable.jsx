import React from 'react';
import './Fruits.css';
import { useCart } from '../../pages/Context/Cartcontext';

const fruits = [
  {
    id: 1,
    name: 'Carrot',
    price: '₹55 / kg',
    image: '/images/carrot.webp',
  },
  {
    id: 2,
    name: 'Tomato',
    price: '₹45 / kg',
    image: '/images/tomato.jpg',
  },
  {
    id: 3,
    name: 'Potato',
    price: '₹60 / kg',
    image: '/images/potato.jpg',
  },
  {
    id: 4,
    name: 'Cucumber',
    price: '₹70 / kg',
    image: '/images/cucumber.jpg',
  },

  {
    id: 5,
    name: 'Bell Pepper (Capsicum)',
    price: '₹58 / kg',
    image: '/images/bellpepper.jpg',
  },

  {
    id: 6,
    name: 'Cabbage',
    price: '₹70 / kg',
    image: '/images/cabbage.jpg',
  },
  {
    id: 7,
    name: 'Green Beans',
    price: '₹80 / kg',
    image: '/images/greenpea.jpg',
  },
  {
    id: 8,
    name: 'Cauliflower',
    price: '₹45 / kg',
    image: '/images/cauli.jpg',
  },
  {
    id: 9,
    name: 'Spinach',
    price: '₹40 / kg',
    image: '/images/pinach.webp',
  },
  {
    id: 10,
    name: 'Onion',
    price: '₹80 / kg',
    image: '/images/onion.webp',
  },

];

function FruitsPage() {
  const { addToCart } = useCart()

  return (
    <div className="fruits-container">
      <h1>Organic Vegetables</h1>
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
