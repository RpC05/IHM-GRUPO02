import React from 'react';
import Basic from '../layout/basic';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import '../styles/novedades.css';

const Novedades = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }
    return (
        <Basic>
            <novedades>
                <Carousel>
                    {
                        upao.map(it => {
                            return (<Carousel.Item onClick={(e) => {
                                e.preventDefault(); handleClick(it.slug)
                            }}>
                                <div>
                                <img className='w-100 dark-image' src={it.picture}></img>

                                </div>
                                <Carousel.Caption>
                                    <h3 className="title-carousel text-light fw-medium">{it.name}</h3>
                                    <p className="title-carousel text-light fw-medium">{it.description}</p>
                                    <button className="botton-carousel text-light btn">Ver detalle</button>
                                </Carousel.Caption>
                            </Carousel.Item>);
                        })
                    }
                </Carousel>
            </novedades>
        </Basic>
    );
}

const upao = [
    {
      name: "Apple presenta el iPhone 15 Pro",
      slug: 'upao-1',
      description: "El iPhone 15 Pro y el iPhone 15 Pro Max estarán disponibles en cuatro magníficos acabados: titanio negro, titanio blanco, titanio azul y titanio natural. Las reservas empezarán el viernes, 15 de septiembre, y los modelos estarán disponibles el viernes, 22 de septiembre...",
      picture: '../../images2/iphone15pro.png'
    },
    {
      name: "Xiaomi reinventa como nunca su buque insignia",
      slug: 'upao-2',
      description: "Xiaomi acaba de anunciar su buque insignia de 2024 en China. Tenemos ante nosotros un espectacular Xiaomi 14 Ultra que refuerza la apuesta del año pasado con un procesador más potente y una pantalla más brillante que nunca...",
      picture: '../../images2/xiaomi14ultra.jpg'
    },
    {
      name: "Samsung Galaxy A55 llega a 5G",
      slug: 'upao-3',
      description: "El Samsung Galaxy A55 tiene una apariencia bastante premium, que llega gracias en parte a cambios en sus materiales de construcción. El aluminio reemplaza el plástico en este modelo, brindándonos una sensación de teléfono de gama más alta...",
      picture: '../../images2/galaxya55.png'
    },
  ];

export default Novedades;