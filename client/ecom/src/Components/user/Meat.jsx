import React from "react";
import "./Fruits.css";
import { useCart } from "../../pages/Context/Cartcontext";

const Meats = [
  {
    id: 1,
    name: "Whole Chicken",
    price: "₹150 / kg",
    image: "/images/chicken.jpg",
  },
  {
    id: 2,
    name: "Beef Steak",
    price: "₹500 / kg",
    image: "/images/beefsteak.jpg",
  },
  {
    id: 3,
    name: "Mutton Chops",
    price: "₹800 / kg",
    image: "/images/muttonchops.jpg",
  },
  {
    id: 4,
    name: "Beef ribs",
    price: "₹600 / kg",
    image: "/images/ribs.jpg",
  },

  {
    id: 5,
    name: "Mutton Liver",
    price: "₹1100 / kg",
    image: "/images/liver.png",
  },

  {
    id: 6,
    name: "Chicken Wings",
    price: "₹140 / kg",
    image: "/images/chickenwings.jpg",
  },
  {
    id: 7,
    name: "Chicken Breast",
    price: "₹160 / kg",
    image: "/images/chickenbreast.jpg",
  },
  {
    id: 8,
    name: "whole Duck ",
    price: "250 / kg",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/12/473853982/QT/YR/SD/6526302/frozen-duck-meat-1000x1000.jpg",
  },
  {
    id: 9,
    name: "Chicken Thighs",
    price: "₹240 / kg",
    image: "/images/thigh.png",
  },
  {
    id: 10,
    name: "Ground Meat",
    price: "₹800 / kg",
    image: "/images/ground.png",
  },
];


function MeatPage() {
  const { addToCart } = useCart();

  return (
    <div className="fruits-container">
      {/* Banner image for Fresh Meat page */}
      <div style={{ textAlign: "center", marginBottom: "24px" }}>
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
          alt="Fresh Meat Banner"
          style={{
            width: "100%",
            maxWidth: "600px",
            borderRadius: "18px",
            boxShadow: "0 4px 24px rgba(67,198,172,0.18)",
          }}
        />
      </div>
      <h1>Fresh Meats</h1>
      <div className="meat-grid">
        {Meats.map((meat) => (
          <div key={meat.id} className="meat-card">
            <img src={meat.image} alt={meat.name} />
            <h2>{meat.name}</h2>
            <p>{meat.price}</p>
            <button onClick={() => addToCart(meat)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MeatPage;
