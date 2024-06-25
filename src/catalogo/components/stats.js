import React, { useState } from 'react';
import '../../styles/components.css';

const Stats = ({ stats }) => {
  const { points, dots } = stats;
  const [score, setScore] = useState(null); // Estado para almacenar el puntaje

  // Función para manejar el hover sobre un punto
  const handleMouseOver = (index) => {
    // Obtener el puntaje del punto correspondiente
    if (dots[index] && dots[index].score) {
      setScore(dots[index].score);
    }
  };

  // Función para manejar el mouse fuera del punto
  const handleMouseOut = () => {
    setScore(null); // Reiniciar el puntaje cuando el mouse sale del punto
  };

  return (
    <div className="phone-stats">
      <h3>Estadísticas</h3>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <svg className="svg-container" version="1" xmlns="http://www.w3.org/2000/svg" width="356.25" height="356.25" viewBox="-10 0 376.25 356.25">
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
                    <circle
                      key={index}
                      cx={dot.cx}
                      cy={dot.cy}
                      className="RadarChart__dot"
                      onMouseOver={() => handleMouseOver(index)}
                      onMouseOut={handleMouseOut}
                    ></circle>
                  ))}
                </g>
              </g>

            </svg>

          </div>
          <div className="col">
            <div className="container text-center">
              <div className="RadarChart__groupButtons">
                <span className="VsIcon__icon___3m84T">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>_smartphone</title>
                    <path d="M22 2h-12c-1.103 0-2 0.897-2 2v24c0 1.103 0.897 2 2 2h12c1.103 0 2-0.897 2-2v-24c0-1.103-0.897-2-2-2zM9 6.010h14v19.017h-14v-19.017zM9 4c0-0.552 0.449-1 1-1h12c0.551 0 1 0.448 1 1v1.010h-14v-1.010zM23 28c0 0.552-0.449 1-1 1h-12c-0.551 0-1-0.448-1-1v-1.973h14v1.973zM14.5 27.995h3c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5h-3c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5z"></path>
                  </svg>
                </span>

                <span className="VsIcon__icon___3m84T">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>_image</title>
                    <path d="M0 4v24h32v-24h-32zM31 5v14.895l-6.761-5.081-3.57 1.903-4.981-2.96-14.688 9.092v-17.849h30zM1 27v-2.976l14.699-9.098 4.944 2.938 3.504-1.87 6.853 5.151v5.855h-30zM21.823 13.465c1.737 0 3.15-1.416 3.15-3.157s-1.413-3.156-3.15-3.156-3.15 1.416-3.15 3.156c0 1.741 1.413 3.157 3.15 3.157zM21.823 8.151c1.186 0 2.15 0.968 2.15 2.156s-0.965 2.157-2.15 2.157-2.15-0.968-2.15-2.157c0-1.188 0.965-2.156 2.15-2.156z"></path>
                  </svg>
                </span>

                <span className="VsIcon__icon___3m84T">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>_chip</title>
                    <path d="M7.831 24.22h16.3v-16.3h-16.3v16.3zM8.831 8.92h14.3v14.3h-14.3v-14.3zM30 8.827v-1h-2.232v-1.545c0-1.103-0.897-2-2-2h-1.525v-2.212h-1v2.212h-1.213v-2.212h-1v2.212h-1.212v-2.212h-1v2.212h-1.212v-2.212h-1v2.212h-1.212v-2.212h-1v2.212h-1.212v-2.212h-1v2.212h-1.212v-2.212h-1v2.212h-1.213v-2.212h-1v2.212h-1.564c-1.103 0-2 0.897-2 2v1.545h-2.193v1h2.193v1.212h-2.193v1h2.193v1.212h-2.193v1h2.193v1.212h-2.193v1h2.193v1.212h-2.193v1h2.193v1.212h-2.193v1h2.193v1.213h-2.193v1h2.193v1.212h-2.193v1h2.193v1.545c0 1.103 0.897 2 2 2h1.564v2.212h1v-2.212h1.213v2.212h1v-2.212h1.212v2.212h1v-2.212h1.212v2.212h1v-2.212h1.212v2.212h1v-2.212h1.212v2.212h1v-2.212h1.212v2.212h1v-2.212h1.212v2.212h1v-2.212h1.525c1.103 0 2-0.897 2-2v-1.545h2.233v-1h-2.232v-1.212h2.232v-1h-2.232v-1.212h2.232v-1h-2.232v-1.212h2.232v-1h-2.232v-1.212h2.232v-1h-2.232v-1.212h2.232v-1h-2.232v-1.212h2.232v-1h-2.232v-1.213h2.232zM26.768 25.858c0 0.551-0.449 1-1 1h-19.575c-0.551 0-1-0.449-1-1v-19.576c0-0.551 0.449-1 1-1h19.575c0.551 0 1 0.449 1 1v19.576z"></path>
                  </svg>
                </span>

                <span className="VsIcon__icon___3m84T">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>_shutter</title>
                    <path d="M10.028 12.424l-5.566 9.64c-0.961-1.842-1.463-3.887-1.463-5.997 0-1.243 0.174-2.466 0.518-3.643h6.511zM11.758 11.424h-8.969c-0.511 1.453-0.789 3.016-0.789 4.644 0 2.957 0.917 5.7 2.482 7.959l7.276-12.603zM16.578 3.081c3.348 0.148 6.501 1.581 8.818 4.003l-3.254 5.636-5.564-9.639zM16 2.068c-0.382 0-0.759 0.017-1.134 0.045l7.276 12.604 4.483-7.765c-2.567-2.99-6.375-4.884-10.625-4.884v0zM12.916 3.437l3.253 5.635h-11.129c1.798-2.809 4.626-4.844 7.876-5.635zM13.417 2.307c-4.462 0.832-8.18 3.78-10.071 7.765h14.554l-4.483-7.765zM27.539 10.071c0.961 1.842 1.463 3.887 1.463 5.997 0 1.244-0.174 2.466-0.518 3.644h-6.511l5.566-9.641zM27.518 8.109l-7.276 12.603h8.969c0.511-1.453 0.789-3.016 0.789-4.644 0-2.957-0.917-5.699-2.482-7.959v0zM26.96 23.063c-1.798 2.81-4.626 4.845-7.876 5.636l-3.254-5.636h11.13zM28.654 22.063h-14.554l4.483 7.766c4.463-0.832 8.18-3.781 10.071-7.766v0zM9.858 19.417l5.564 9.638c-3.347-0.149-6.501-1.582-8.817-4.003l3.253-5.635zM9.858 17.419l-4.483 7.764c2.567 2.99 6.375 4.884 10.625 4.884 0.382 0 0.759-0.016 1.134-0.045l-7.276-12.603z"></path>
                  </svg>
                </span>

                <span className="VsIcon__icon___3m84T">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>_phone_pc</title>
                    <path d="M30.136 9.976h-9.109c-1.103 0-2 0.897-2 2v18c0 1.103 0.897 2 2 2h9.109c1.103 0 2-0.897 2-2v-18c0-1.103-0.897-2-2-2zM20.027 13.318h11.109v14.568h-11.109v-14.568zM21.027 10.976h9.109c0.551 0 1 0.449 1 1v0.341h-11.109v-0.341c0-0.551 0.449-1 1-1zM30.136 30.976h-9.109c-0.551 0-1-0.449-1-1v-1.090h11.109v1.090c0 0.552-0.448 1-1 1zM26.792 29.417h-2.422c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5h2.422c0.276 0 0.5-0.224 0.5-0.5s-0.223-0.5-0.5-0.5zM0.987 5.975h26v3.034h1v-3.534c0-0.276-0.224-0.5-0.5-0.5h-27c-0.276 0-0.5 0.224-0.5 0.5v17c0 0.276 0.224 0.5 0.5 0.5h13v2.069l-3.5 0.913 0.253 0.968 3.747-0.978 3.747 0.978 0.253-0.968-3.5-0.913v-2.069h3.513v-1h-17.013v-0.985h17.013v-1h-17.013v-14.015z"></path>
                  </svg>
                </span>

                <span className="VsIcon__icon___3m84T">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>_battery</title>
                    <path d="M25.031 10.99h-21.042v9.996h21.042v-9.996zM4.989 19.987v-3.342l4.637-4.654h3.382l-7.967 7.996h-0.052zM14.421 11.99h3.383l-7.968 7.996h-3.382l7.967-7.996zM19.217 11.99h3.383l-7.968 7.996h-3.382l7.967-7.996zM24.012 11.99h0.019v3.375l-4.604 4.621h-3.382l7.967-7.996zM8.214 11.99l-3.225 3.236v-3.236h3.225zM20.839 19.987l3.192-3.203v3.203h-3.192zM30 11.985h-3.009v-3.013h-24.991v14.052h24.991v-3.040h2.963l0.046-7.999zM25.991 22.024h-22.991v-12.052h22.991v12.052zM28.96 18.985h-1.969v-6h2.003l-0.034 6z"></path>
                  </svg>
                </span>

                <span className="VsIcon__icon___3m84T">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>_musical_note</title>
                    <path d="M12 2v22.625c-0.912-0.981-2.359-1.625-4-1.625-2.757 0-5 1.794-5 4s2.243 4 5 4 5-1.794 5-4c0-0.105-0.029-0.204-0.039-0.307 0.025-0.060 0.039-0.125 0.039-0.193v-19.5h16v15.625c-0.912-0.981-2.359-1.625-4-1.625-2.757 0-5 1.794-5 4s2.243 4 5 4 5-1.794 5-4c0-0.105-0.029-0.204-0.039-0.307 0.025-0.060 0.039-0.125 0.039-0.193v-22.5h-18zM8 30c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3-1.794 3-4 3zM25 28c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3-1.794 3-4 3zM13 6v-3h16v3h-16z"></path>
                  </svg>
                </span>

                <span className="VsIcon__icon___3m84T">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>_plus</title>
                    <path d="M25.192 6.808c-2.461-2.461-5.731-3.819-9.208-3.823-0.005 0-0.011 0-0.017 0-3.47 0-6.731 1.35-9.183 3.801-5.068 5.068-5.059 13.326 0.022 18.407 2.544 2.544 5.885 3.817 9.224 3.817 3.328 0 6.653-1.265 9.183-3.795 5.070-5.069 5.060-13.327-0.021-18.407zM24.507 24.508c-4.679 4.679-12.302 4.669-16.993-0.022s-4.701-12.314-0.022-16.993c2.263-2.263 5.272-3.508 8.476-3.508 0.005 0 0.010 0 0.016 0 3.21 0.004 6.229 1.258 8.501 3.53 4.691 4.691 4.701 12.313 0.022 16.993zM16.5 8.021h-1v7.479h-7.479v1h7.479v7.479h1v-7.479h7.479v-1h-7.479z"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
        {score !== null && (
          <div className="score-tooltip">
            Puntaje: {score}
          </div>
        )}
      </div>



    </div>
  );
};

export default Stats;