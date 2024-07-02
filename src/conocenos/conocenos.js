import React from 'react';
import Basic from '../layout/basic';
import '../styles/conocenos.css';

const Conocenos = () => {
    return (
        <Basic>
            <conocenos>
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col">
                        <img src="https://gestion.pe/resizer/-zJhy4XUAZ-SxKlV0ptPS5mvIA4=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/X4J2Z6XQUZDO7O6QTDF4DIJ3VE.jpeg" ></img>
                        </div>
                        <div className="col">
                            <div className="col">
                                <h2>MISIÓN</h2>
                                <p>Compartir conocimientos sobre dispositivos móviles para que 
                                    así los compradores sepan el mejor modelo a valorar y escoger 
                                    de acuerdo a sus necesidades y presupuesto.</p>
                            </div>
                            <div className="col">
                                <h2>VISIÓN</h2>
                                <p>Ser la página web de tecnología y novedades en términos de teléfonos
                                    celulares líder en el sector alrededor de la comunidad hispana y del mundo.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </conocenos>
        </Basic>
    );
}
export default Conocenos;