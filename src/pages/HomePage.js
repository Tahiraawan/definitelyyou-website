import Slider from '../components/Slider'
import React from "react";
import ProductCard from "../components/ProductCard";
import productImage from '../images/product1.jpg';
import p1 from '../images/p1.jpg'

function HomePage() {
  const products = [
    {
      imageLink: productImage,  
      title: "Fancy Frock",
      price: "1000 PKR",
      rating: 3,
      color: ["orange", "green", "yellow"],
      size: ["XS", "S", "M", "L", "XL"],
    },
    {
        imageLink: productImage, 
      title: "Fancy Frock",
      price: "1000 PKR",
      rating: 3,
      color: ["blue", "green", "yellow"],
      size: ["XS", "S", "M", "L", "XL"],
    },
    {
        imageLink: p1, 
      title: "Fancy Frock",
      price: "1000 PKR",
      rating: 3,
      color: ["orange", "purple", "yellow"],
      size: ["XS", "S", "M", "L", "XL"],
    },
    {
        imageLink: productImage, 
      title: "Fancy Frock",
      price: "1000 PKR",
      rating: 3,
      color: ["orange", "green", "pink"],
      size: ["XS", "S", "M", "L", "XL"],
    },
  ];
  return (
    <div className="home-page">
      <Slider/>
      <div className="products">
        <h2>All Products</h2>
        <div className="all-products">
          {products.map((product, index) => {
            return (
              <ProductCard
                key={index}
                imageLink={product.imageLink}
                title={product.title}
                price={product.price}
                rating={product.rating}
                color={product.color}
                size={product.size}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

