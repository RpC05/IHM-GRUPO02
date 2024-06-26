import React from 'react'; 
import '../../styles/components.css';

const Card = ({ phone, onSelect, isSelected }) => {
    return ( 
        <div className={`phone-card ${isSelected ? 'selected' : ''}`} onClick={() => onSelect(phone)}>
            <img src={phone.image} alt={phone.name} />
            <h3>{phone.name}</h3>
            <input type="checkbox" checked={isSelected} readOnly />
        </div>
    );
};

export default Card;