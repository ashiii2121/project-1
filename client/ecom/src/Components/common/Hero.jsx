import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaShoppingCart,
  FaArrowRight,
  FaStar,
  FaLeaf,
  FaTruck,
  FaShieldAlt,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./Hero.css";

function Hero({ addToCart }) {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const heroSlides = [
    {
      title: "Fresh Groceries Delivered",
      subtitle: "Farm to your doorstep in 30 minutes",
      description:
        "Discover the freshest produce, organic vegetables, and premium quality groceries delivered right to your home.",
      image:
        "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
      buttonText: "Shop Fresh Now",
      buttonLink: "/category",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Organic & Natural",
      subtitle: "100% Chemical-free products",
      description:
        "Choose from our wide selection of organic fruits, vegetables, and natural products for a healthier lifestyle.",
      image:
        "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80",
      buttonText: "Go Organic",
      buttonLink: "/category",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    },
    {
      title: "Premium Quality Meat",
      subtitle: "Fresh cuts from trusted sources",
      description:
        "Premium quality meat and seafood, carefully selected and delivered fresh to ensure the best taste and nutrition.",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
      buttonText: "Explore Meat",
      buttonLink: "/meat",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)",
    },
  ];

  const features = [
    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description: "30-minute delivery",
    },
    {
      icon: <FaLeaf />,
      title: "Fresh & Organic",
      description: "100% natural products",
    },
    {
      icon: <FaShieldAlt />,
      title: "Quality Assured",
      description: "Premium quality guarantee",
    },
    {
      icon: <FaStar />,
      title: "Best Prices",
      description: "Competitive pricing",
    },
  ];

  useEffect(() => {
    const hero = heroRef.current;
    if (hero) {
      hero.style.opacity = 0;
      hero.style.transform = "translateY(40px)";
      setTimeout(() => {
        hero.style.transition =
          "opacity 1.2s cubic-bezier(.77,0,.18,1), transform 1.2s cubic-bezier(.77,0,.18,1)";
        hero.style.opacity = 1;
        hero.style.transform = "translateY(0)";
      }, 200);
    }

    // Parallax scroll effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    // Auto-slide functionality
    let slideInterval;
    if (isAutoPlay) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 5000);
    }

    return () => {
      clearInterval(slideInterval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroSlides.length, isAutoPlay]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000); // Resume autoplay after 10 seconds
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const currentHeroData = heroSlides[currentSlide];

  return (
    <section className="modern-hero" ref={heroRef}>
      {/* Main Hero Section */}
      <div
        className="hero-main"
        style={{
          background: currentHeroData.gradient,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        {/* Navigation Arrows */}
        <button className="hero-nav-btn prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="hero-nav-btn next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge">
                <FaStar />
                <span>Premium Quality</span>
              </div>
              <h1 className="hero-title">{currentHeroData.title}</h1>
              <h2 className="hero-subtitle">{currentHeroData.subtitle}</h2>
              <p className="hero-description">{currentHeroData.description}</p>
              <div className="hero-actions">
                <button
                  className="hero-btn primary"
                  onClick={() => navigate(currentHeroData.buttonLink)}
                >
                  <FaShoppingCart />
                  {currentHeroData.buttonText}
                  <FaArrowRight />
                </button>
                <button
                  className="hero-btn secondary"
                  onClick={() => navigate("/about")}
                >
                  <FaPlay />
                  Watch Demo
                </button>
              </div>
              <div className="hero-trust-indicators">
                <div className="trust-item">
                  <span className="trust-number">4.9</span>
                  <span className="trust-label">★★★★★ Rating</span>
                </div>
                <div className="trust-item">
                  <span className="trust-number">10K+</span>
                  <span className="trust-label">Happy Customers</span>
                </div>
              </div>
            </div>
            <div className="hero-image">
              <img
                src={currentHeroData.image}
                alt={currentHeroData.title}
                className="hero-img"
                style={{ transform: `translateY(${scrollY * -0.3}px)` }}
              />
              <div className="hero-image-overlay"></div>
              <div className="hero-floating-elements">
                <div className="floating-element element-1">
                  <FaLeaf />
                </div>
                <div className="floating-element element-2">
                  <FaTruck />
                </div>
                <div className="floating-element element-3">
                  <FaShieldAlt />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="slide-indicators">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`slide-indicator ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => handleSlideChange(index)}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="hero-features">
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="hero-stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3 className="stat-number">10K+</h3>
            <p className="stat-label">Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Products</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">30min</h3>
            <p className="stat-label">Delivery Time</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">24/7</h3>
            <p className="stat-label">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
