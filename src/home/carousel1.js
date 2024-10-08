import React from 'react';

const Carousel1 = () => {
    
    return (
        <div id="carouselExampleCaptions1" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i.blogs.es/d74962/pixel/500_333.jpeg" className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Apple presenta el iPhone 15 Pro</h5>
                        <p>El iPhone 15 Pro y el iPhone 15 Pro Max estarán disponibles en cuatro magníficos acabados.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.blogs.es/a5d65e/oppo-reno12-oppo-reno12-pro/500_333.jpeg" className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Nuevo Xiaomi 14 Ultra</h5>
                        <p>Xiaomi acaba de anunciar su buque insignia de 2024 en China.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://i.blogs.es/cf9d62/realme-gt6/500_333.jpeg" className="d-block w-100" alt="..."></img>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Samsung Galaxy A55 llega a 5G</h5>
                        <p>El Samsung Galaxy A55 tiene una apariencia bastante premium, que llega gracias en parte a cambios en sus materiales de construcción.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel1;