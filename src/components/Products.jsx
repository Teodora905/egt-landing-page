import React from "react";
import { products } from "../data";

function Products() {
  return (
    <section className="products-section">
      <div className="products-container">
        <div className="products-header">Our Products</div>
        <div className="products">
          {products.map((item, index) => {
            return (
              <div key={item.id} className="product">
                <div className="product-image">
                  <img src={item.image} alt="placeholder" />
                </div>
                <div className="product-title">
                  <div className="product-text">
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
    
  );
}

export default Products;