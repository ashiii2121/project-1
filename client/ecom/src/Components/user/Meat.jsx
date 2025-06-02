import React from 'react';
import './Fruits.css';
import { useCart } from '../../pages/Context/Cartcontext';

const fruits = [
  {
    id: 1,
    name: 'Whole Chicken',
    price: '₹150 / kg',
    image: '/images/chicken.jpg',
  },
  {
    id: 2,
    name: 'Beef Steak',
    price: '₹500 / kg',
    image: '/images/beefsteak.jpg',
  },
  {
    id: 3,
    name: 'Mutton Chops',
    price: '₹800 / kg',
    image: '/images/muttonchops.jpg',
  },
  {
    id: 4,
    name: 'Beef ribs',
    price: '₹600 / kg',
    image: '/images/ribs.jpg',
  },

  {
    id: 5,
    name: 'Mutton Liver',
    price: '₹1100 / kg',
    image: '/images/liver.png',
  },

  {
    id: 6,
    name: 'Chicken Wings',
    price: '₹140 / kg',
    image: '/images/chickenwings.jpg',
  },
  {
    id: 7,
    name: 'Chicken Breast',
    price: '₹160 / kg',
    image: '/images/chickenbreast.jpg',
  },
  {
    id: 8,
    name: 'whole Duck ',
    price: '250 / kg',
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/12/473853982/QT/YR/SD/6526302/frozen-duck-meat-1000x1000.jpg',
  },
  {
    id: 9,
    name: 'Chicken Thighs',
    price: '₹240 / kg',
    image: 'images/thigh.png',
  },
  {
    id: 10,
    name: 'Ground Meat',
    price: '₹800 / kg',
    image: "images/ground.png",
  },

];

function MeatPage() {
  const { addToCart } = useCart()

  return (
    <div className="fruits-container">
      <h1>Fresh Meats</h1>
      <div className="fruit-grid">
        {fruits.map(meat => (
          <div key={meat.id} className="fruit-card">
            <img src={meat.image} alt={meat.name} />
            <h3>{meat.name}</h3>
            <p>{meat.price}</p>
            <button onClick={() => addToCart(meat)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeatPage;
