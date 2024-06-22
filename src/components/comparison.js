import React from 'react';
import '../styles/components.css';
import Stats from './stats.js';

const Comparison = ({ phone1, phone2 }) => {
  if (!phone1 || !phone2) return null;

  return (
    <div className="phone-comparison">
      <div className="phone-details">
        <img src={phone1.image} alt={phone1.name} />
        <h3>{phone1.name}</h3>
        <ul>
          {Object.keys(phone1.specs).map((key) => (
            <li key={key}>
              {key}: {phone1.specs[key]}
            </li>
          ))}
        </ul>
        <Stats stats={phone1.stats} />
      </div>
      <div className="phone-details">
        <img src={phone2.image} alt={phone2.name} />
        <h3>{phone2.name}</h3>
        <ul>
          {Object.keys(phone2.specs).map((key) => (
            <li key={key}>
              {key}: {phone2.specs[key]}
            </li>
          ))}
        </ul>
        <Stats stats={phone2.stats} />
      </div>
    </div>
  );
};

export default Comparison;