import React from 'react';
import Basic from '../layout/basic';
import Carousel1 from '/workspaces/IHM-GRUPO02/src/home/carousel1.js';
import Carousel2 from '/workspaces/IHM-GRUPO02/src/home/carousel2.js';

const Home = () => {
    return (
        <Basic>
            <home>
                <div className="container text-center">
                    <h2>Descubre la tecnología</h2>
                    <div className="row align-items-center">
                        <div className="col">
                            <Carousel1 />
                        </div>
                        <div className="col">
                            <Carousel2 />
                        </div>
                    </div>
                </div>
            </home>
        </Basic>
    );
}
export default Home;