import React, { useState } from "react";
import { FaFilter, FaSort, FaThLarge, FaList, FaSearch } from "react-icons/fa";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const ProductGrid = ({
  products = [],
  title,
  onAddToCart,
  onAddToWishlist,
  showFilters = true,
  showSearch = true,
  showViewToggle = true,
  variant = "default",
  columns = "auto",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filterBy, setFilterBy] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [showFiltersPanel, setShowFiltersPanel] = useState(false);

  // Get unique categories for filter
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category).filter(Boolean)),
  ];

  // Filter and sort products
  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description &&
          product.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesFilter = filterBy === "all" || product.category === filterBy;
      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

  const getGridColumns = () => {
    if (columns !== "auto") return columns;
    if (viewMode === "list") return "1fr";
    return "repeat(auto-fill, minmax(280px, 1fr))";
  };

  return (
    <div className="product-grid-container">
      {title && <h2 className="grid-title">{title}</h2>}

      {/* Controls */}
      {(showSearch || showFilters || showViewToggle) && (
        <div className="grid-controls">
          {/* Search */}
          {showSearch && (
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          )}

          <div className="controls-right">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>

            {/* Filter Toggle */}
            {showFilters && (
              <button
                className={`filter-toggle ${showFiltersPanel ? "active" : ""}`}
                onClick={() => setShowFiltersPanel(!showFiltersPanel)}
              >
                <FaFilter />
                Filters
              </button>
            )}

            {/* View Toggle */}
            {showViewToggle && (
              <div className="view-toggle">
                <button
                  className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                  onClick={() => setViewMode("grid")}
                >
                  <FaThLarge />
                </button>
                <button
                  className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                  onClick={() => setViewMode("list")}
                >
                  <FaList />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Filters Panel */}
      {showFilters && showFiltersPanel && (
        <div className="filters-panel">
          <div className="filter-group">
            <label>Category:</label>
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="filter-select"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      {/* Results Info */}
      <div className="results-info">
        <span>
          Showing {filteredProducts.length} of {products.length} products
        </span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div
          className={`products-grid ${viewMode}`}
          style={{ gridTemplateColumns: getGridColumns() }}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id || index}
              product={product}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
              variant={viewMode === "list" ? "detailed" : variant}
            />
          ))}
        </div>
      ) : (
        <div className="no-products">
          <div className="no-products-content">
            <FaSearch className="no-products-icon" />
            <h3>No products found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        </div>
      )}

      {/* Load More Button (if needed) */}
      {filteredProducts.length > 0 &&
        filteredProducts.length < products.length && (
          <div className="load-more-container">
            <button className="load-more-btn">Load More Products</button>
          </div>
        )}
    </div>
  );
};

export default ProductGrid;
