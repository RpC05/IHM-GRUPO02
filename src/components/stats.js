import React from 'react';
import '../styles/components.css';

const Stats = ({ stats }) => {
  const { points, dots } = stats; 

  return (
    <div className="phone-stats">
      <h3>Estadísticas</h3>
      <svg version="1" xmlns="http://www.w3.org/2000/svg" width="356.25" height="356.25" viewBox="-10 0 376.25 356.25">
        <defs>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="stop-0" />
            <stop offset="100%" className="stop-100" />
          </linearGradient>
        </defs>
        <g transform="translate(178.1250,178.1250)">
          <g>
            <circle cx="0" cy="0" r="137.01923076923077" className="RadarChart__scale"></circle>
            <circle cx="0" cy="0" r="114.18269230769232" className="RadarChart__scale"></circle>
            <circle cx="0" cy="0" r="91.34615384615384" className="RadarChart__scale"></circle>
            <circle cx="0" cy="0" r="68.50961538461539" className="RadarChart__scale"></circle>
            <circle cx="0" cy="0" r="45.67307692307692" className="RadarChart__scale"></circle>
            <circle cx="0" cy="0" r="22.83653846153846" className="RadarChart__scale"></circle>
          </g>
          <g>
            <polyline points="0.0000,0.0000 0.0000,-137.0192" className="RadarChart__axis"></polyline>
            <polyline points="0.0000,0.0000 96.8872,-96.8872" className="RadarChart__axis"></polyline>
            <polyline points="0.0000,0.0000 137.0192,0.0000" className="RadarChart__axis"></polyline>
            <polyline points="0.0000,0.0000 96.8872,96.8872" className="RadarChart__axis"></polyline>
            <polyline points="0.0000,0.0000 0.0000,137.0192" className="RadarChart__axis"></polyline>
            <polyline points="0.0000,0.0000 -96.8872,96.8872" className="RadarChart__axis"></polyline>
            <polyline points="0.0000,0.0000 -137.0192,0.0000" className="RadarChart__axis"></polyline>
            <polyline points="0.0000,0.0000 -96.8872,-96.8872" className="RadarChart__axis"></polyline>
          </g>
          <g>
            <path d={`M${points.join('L')}z`} className="RadarChart__shape"></path>
          </g>
          <g>
            <text x="0.0000" y="-169.2188" dy="6" textAnchor="middle" className="RadarChart__captions">Diseño</text>
            <text x="119.6557" y="-119.6557" dy="6" textAnchor="middle" className="RadarChart__captions">Pantalla</text>
            <text x="169.2188" y="0.0000" dy="6" textAnchor="middle" className="RadarChart__captions">Rendimiento</text>
            <text x="119.6557" y="119.6557" dy="6" textAnchor="middle" className="RadarChart__captions">Cámaras</text>
            <text x="0.0000" y="169.2188" dy="6" textAnchor="middle" className="RadarChart__captions">Sistema operativo</text>
            <text x="-119.6557" y="119.6557" dy="6" textAnchor="middle" className="RadarChart__captions">Batería</text>
            <text x="-169.2188" y="0.0000" dy="6" textAnchor="middle" className="RadarChart__captions">Audio</text>
            <text x="-119.6557" y="-119.6557" dy="6" textAnchor="middle" className="RadarChart__captions">Otros</text>
          </g>
          <g>
            {dots.map((dot, index) => (
              <circle key={index} cx={dot.cx} cy={dot.cy} className="RadarChart__dot"></circle>
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Stats;