import React from "react";
import { productsNew } from "../data";
import useWindowWidth from "../hooks/useWindowWidth";


function Footer() {
  const width = useWindowWidth();
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="list-box">
        {width > 800 &&
            productsNew.map((item) => (
              <div key={item.id} className="column">
                <div className="column-title">{item.title}</div>
                <div className="column-products">
                  {item.models.map((model) => (
                    <div key={model.id} className="footer-product">
                      <a href="#">{model.title}</a>
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
          <div className="column">
            <div className="column-title">Company</div>
            <div className="column-products">
              <div className="footer-product"><a href="#">News & Events</a></div>
              <div className="footer-product"><a href="#">About Us</a></div>
              <div className="footer-product"><a href="#">Contact Us</a></div>
              <div className="footer-product"><a href="#">Careers</a></div>
            </div>
          </div>
          <div className="column">
            <div className="column-title">Social Networks</div>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Footer;