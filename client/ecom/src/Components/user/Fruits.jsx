import React from "react";
import ProductGrid from "../common/ProductGrid";
import { useCart } from "../../pages/Context/Cartcontext";

const fruits = [
  {
    id: 1,
    name: "Fresh Red Apples",
    price: 199,
    originalPrice: 250,
    category: "Fruits",
    rating: 4.5,
    reviewCount: 128,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80",
    description: "Crisp and sweet red apples, perfect for snacking or baking.",
    badge: { type: "sale", text: "20% OFF" },
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 60,
    category: "Fruits",
    rating: 4.3,
    reviewCount: 95,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80",
    description:
      "Fresh organic bananas, rich in potassium and natural sweetness.",
    badge: { type: "new", text: "ORGANIC" },
  },
  {
    id: 3,
    name: "Juicy Oranges",
    price: 60,
    category: "Fruits",
    rating: 4.4,
    reviewCount: 76,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=400&q=80",
    description: "Sweet and tangy oranges packed with vitamin C.",
  },
  {
    id: 4,
    name: "Premium Mangoes",
    price: 100,
    originalPrice: 130,
    category: "Fruits",
    rating: 4.8,
    reviewCount: 156,
    stock: 15,
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80",
    description: "Sweet and aromatic mangoes, the king of fruits.",
    badge: { type: "hot", text: "BESTSELLER" },
  },
  {
    id: 5,
    name: "Fresh Pineapple",
    price: 50,
    category: "Fruits",
    rating: 4.2,
    reviewCount: 64,
    stock: 20,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=400&q=80",
    description: "Tropical pineapple with sweet and tangy flavor.",
  },
  {
    id: 6,
    name: "Exotic Kiwi",
    price: 120,
    category: "Fruits",
    rating: 4.1,
    reviewCount: 42,
    stock: 18,
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?auto=format&fit=crop&w=400&q=80",
    description: "Exotic kiwi fruits rich in vitamin C and fiber.",
  },
  {
    id: 7,
    name: "Premium Strawberries",
    price: 180,
    category: "Fruits",
    rating: 4.7,
    reviewCount: 89,
    stock: 12,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=400&q=80",
    description: "Fresh, juicy strawberries perfect for desserts.",
    badge: { type: "hot", text: "LIMITED" },
  },
  {
    id: 8,
    name: "Sweet Papaya",
    price: 45,
    category: "Fruits",
    rating: 4.0,
    reviewCount: 52,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&w=400&q=80",
    description: "Sweet and nutritious papaya, rich in vitamins.",
  },
  {
    id: 9,
    name: "Sweet Watermelon",
    price: 40,
    category: "Fruits",
    rating: 4.3,
    reviewCount: 112,
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80",
    description: "Refreshing watermelon perfect for summer days.",
  },
  {
    id: 10,
    name: "Green Grapes",
    price: 100,
    category: "Fruits",
    rating: 4.4,
    reviewCount: 58,
    stock: 28,
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=400&q=80",
    description: "Sweet and seedless green grapes, perfect for snacking.",
  },
];

function FruitsPage() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    // You can add a toast notification here
  };

  const handleAddToWishlist = (product) => {
    // Implement wishlist functionality
    console.log("Added to wishlist:", product);
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <ProductGrid
        products={fruits}
        title="Fresh Organic Fruits"
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
        showFilters={true}
        showSearch={true}
        showViewToggle={true}
        variant="default"
      />
    </div>
  );
}

export default FruitsPage;
