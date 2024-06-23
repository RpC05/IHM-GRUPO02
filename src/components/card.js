import React from 'react';
import '../styles/components.css';

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

/*
  
        <div class="container">
          <div class="cards">
            <div class="card card-one">
              <h2 class="card-title">The Avengers</h2>
              <p class="date">27 April 2012</p>
              <p class="description">Marvel's The Avengers is a 2012 American superhero film based on the Marvel Comics superhero team of the same name</p>
            </div>
            
            <div class="card card-two">
              <h2 class="card-title">Avengers: <br>Age of Ultron</h2>
              <p class="date">May 1, 2015</p>
              <p class="description">Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team the Avengers</p>
            </div>
            
            <div class="card card-three">
              <h2 class="card-title">Avengers: Infinity War</h2>
              <p class="date">27 April 2018</p>
              <p class="description">Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers</p>
            </div>
            
            <div class="card card-four">
              <h2 class="card-title">Avengers: Endgame</h2>
              <p class="date">26 April 2019</p>
              <p class="description">Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers</p>
            </div>
          </div>
        </div> 



*,*::before,*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
} 


.phone-list {
  height: 100%;
  width: 100%;
  padding: 1rem 0;
  display: grid;
  place-content: center;
  
  .phone-list {    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
    pointer-events: none;
  }
  
  .phone-card {
    max-width: 15rem;
    color: #ffffffda;
    padding: 1.5rem;
    background-color: #202022;
    
    pointer-events: auto;
    
    transform: scale(1);
    opacity: 1;
    transition: all 150ms ease-in-out; 
    
    display: flex;
    flex-direction: column;
    
    .phone-card h3 {
      position: relative;
      
      &::before {
        content: "";
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        box-shadow: inset 0 0 3px #86fc8c;
        background-color: transparent;
        
        position: absolute;
        right: 0;
      }
    }
    
  }
}
.phone-list:hover > .phone-card:hover {
  transform: scale(1.15);
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
  z-index: 10;
}
.phone-list:hover > .phone-card:not(:hover) {
  opacity: 0.5;
}
*/