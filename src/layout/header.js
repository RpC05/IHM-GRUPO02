import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return <header>
        <nav className="navbar navbar-expand-lg " >
            <div className="header-container-style container-fluid ">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <ul className="nav nav-underline">
                            <li className="nav-item">
                                <span className="navbar-brand fs-6">
                                    <Link to="/novedades"
                                        className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                                        <i data-feather="gift" className="me-2 mb-2" id="icon-header"></i>
                                        NOVEDADES
                                    </Link>
                                </span>
                            </li>
                            <li className="nav-item">
                                <span className=" navbar-brand fs-6">
                                    <Link to="/catalogo"
                                        className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                                        <i data-feather="smartphone" className="me-2 mb-2" id="icon-header"></i>
                                        CATÁLOGO
                                    </Link>
                                </span>
                            </li>
                            <img id="logo" src="/images/logo.png" ></img>
                            <li className="nav-item">
                                <span className=" navbar-brand">
                                    <Link to="/"
                                        className="cormorant-logo-text-style text-light">
                                        TECNOLOGÍA
                                    </Link>
                                </span>
                            </li>

                            <li className="nav-item">
                                <span className=" navbar-brand fs-6">
                                    <Link to="/conocenos"
                                        className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                                        <i data-feather="plus-square" className="me-2 mb-2" id="icon-header"></i>
                                        CONÓCENOS
                                    </Link>
                                </span>
                            </li>
                            <li className="nav-item" >
                                <span className=" navbar-brand fs-6">
                                    <Link to="/contactanos"
                                        className="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                                        <i data-feather="mail" className="me-2 mb-2" id="icon-header"></i>
                                        CONTÁCTANOS
                                    </Link>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>;
}
export default Header;