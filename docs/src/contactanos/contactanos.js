import React from 'react';
import Basic from '../layout/basic';
import '../styles/contactanos.css';

const Contactanos = () => {
    return (
        <Basic>
            <contactanos>
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="col">
                                <h2>CONTÁCTANOS</h2>
                            </div>
                            <br></br>
                            <div className="col">
                                <h6>Dirección de tienda:</h6>
                                <p>Distrito de Trujillo, Trujillo</p>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="col">
                                <h6>Teléfonos:</h6>
                                <p>91-1234-567 & +34-91-1234-567</p>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="col">
                                <h6>Email:</h6>
                                <p>contacto@tecnoalex.com</p>
                            </div>
                        </div>
                        <div className="col">
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Nombre completo</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Correo</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"></input>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Consulta</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button class="btn success">Enviar</button>
                        </div>
                    </div>
                </div>
            </contactanos>
        </Basic>
    );
}
export default Contactanos;