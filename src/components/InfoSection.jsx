import React from "react";
import { news } from "../data";
import * as FaIcons from 'react-icons/fa';

function InfoSection() {
  return (
    <section className="info-section">
      <div className="cards">
      {news.map((item, index) => {
        const Icon = FaIcons[item.icon];
        return (
          <div key={item.id} className="card">
            <div className="section-header"> 
              {Icon && <Icon size={52} style={{ marginRight: '14px' }} />}
              <div className="header-text">{item.card_title}</div>
            </div>
            <div className="card-image">
              <img src={item.image} alt="Image" />
            </div>
            <div className="card-title">{item.title}</div>
            <small className="card-date">{item.date}</small>
            <div className="card-text">"{item.text}"</div>
            <button>Read More</button>
          </div>
        );
      })}
      </div>
    </section>
  );
}

export default InfoSection;