import React, { useState } from 'react';
import { phones } from '../data/phones.js';
import '../../styles/components.css';
import Card from './card.js';
import Comparison from './comparison.js';


const Comparacion = () => {
  const [selectedPhones, setSelectedPhones] = useState([]);

  const handleSelect = (phone) => {
    setSelectedPhones((prevSelected) => {
      if (prevSelected.includes(phone)) {
        return prevSelected.filter(p => p !== phone);
      } else if (prevSelected.length < 2) {
        return [...prevSelected, phone];
      } else {
        return [prevSelected[1], phone];
      }
    });
  };

  return (
    <main>

      <div className="container text-center">
        <div className="col">
          <h1>COMPARACIÓN DE TELÉFONOS MÓVILES</h1>
        </div>
        <div className="col">
          <div className="row align-items-center">
            <div className='Container-list'>
              <div className="phone-list">
                {phones.map(phone => (
                  <Card
                    key={phone.id}
                    phone={phone}
                    onSelect={handleSelect}
                    isSelected={selectedPhones.includes(phone)}
                  />
                ))}
              </div>
            </div> 
          </div>
          <Comparison phone1={selectedPhones[0]} phone2={selectedPhones[1]} />
        </div>
      </div>
    </main>
  );
};

export default Comparacion;

