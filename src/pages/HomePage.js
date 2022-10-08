import Slider from '../components/Slider'
import React from "react";
import ProductCard from "../components/ProductCard";
import productImage from '../images/product1.jpg';
import p1 from '../images/p1.jpg'
import Testimonials from '../components/Testimonials';
import ContactUs from '../components/ContactUs';
import { products } from '../products';

function HomePage() {
;
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
      <Testimonials/>
      <ContactUs/>
    </div>
  );
}

export default HomePage;

