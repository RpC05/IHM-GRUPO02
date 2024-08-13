import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return <footer>
        <div class="footer-container-style">
            <div className="footer-content">
                <div class="row justify-content-between py-5 mt-5 border-top">
                    <div class="col mb-2">
                        <p class="text-body-secondary">Todos los derechos reservados</p>
                        <p class="text-body-secondary">© 2024</p>
                    </div>

                    <div class="col mb-3 ">
                        <h5>Home</h5>
                        <br></br>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0 text-body-secondary">
                                    <i data-feather="gift" className="me-2 mb-2"></i>
                                    Novedades
                                </Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/catalogo" class="nav-link p-0 text-body-secondary">
                                    <i data-feather="smartphone" className="me-2 mb-2"></i>
                                    Catálogo
                                </Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/conocenos" class="nav-link p-0 text-body-secondary">
                                    <i data-feather="plus-square" className="me-2 mb-2"></i>
                                    Conócenos
                                </Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/contactanos" class="nav-link p-0 text-body-secondary">
                                    <i data-feather="mail" className="me-2 mb-2"></i>
                                    Contáctanos
                                </Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/terminos" class="nav-link p-0 text-body-secondary">
                                    <i data-feather="book" className="me-2 mb-2"></i>
                                    Términos y Condiciones
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div class="col mb-3">
                        <h5>Redes sociales</h5>
                        <br></br>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0 text-body-secondary">
                                    <i data-feather="facebook" className="me-2 mb-2"></i>
                                    Facebook
                                </Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0 text-body-secondary">
                                    <i data-feather="instagram" className="me-2 mb-2"></i>
                                    Instagram
                                </Link>
                            </li>
                            <li class="nav-item mb-2">
                                <Link to="/" class="nav-link p-0 text-body-secondary">
                                    <i data-feather="youtube" className="me-2 mb-2"></i>
                                    Youtube
                                </Link>
                            </li> 
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    </footer>;
}
export default Footer;