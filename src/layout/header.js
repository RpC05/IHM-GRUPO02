import React from 'react'; 

const Header = () => {
    return <header>
        <nav class="navbar navbar-expand-lg " >
            <div class="header-container-style container-fluid ">
                <div class="container text-center">
                    <div class="row align-items-center">
                        <ul class="nav nav-underline">
                            <li class="nav-item">
                                <span class=" navbar-brand fs-6">
                                    <a href="https://idiomas.upao.edu.pe"
                                        class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                                        <i data-feather="globe" class="me-2 mb-2"></i>
                                        NOVEDADES
                                    </a>
                                </span>
                            </li>
                            <li class="nav-item">
                                <span class=" navbar-brand fs-6">
                                    <a href="https://upao.info/bolsadetrabajo/"
                                        class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                                        <i data-feather="briefcase" class="me-2 mb-2"></i>
                                        CATÁLOGO
                                    </a>
                                </span>
                            </li>
                            <img src="{logo}" ></img>
                            <li class="nav-item"> 
                                <span class=" navbar-brand">
                                    <a class="cormorant-logo-text-style text-light">
                                        TECNO ALEX
                                    </a>
                                </span>
                            </li>

                            <li class="nav-item">
                                <span class=" navbar-brand fs-6">
                                    <a href="https://upao.instructure.com/"
                                        class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                                        <i data-feather="aperture" class="me-2 mb-2"></i>
                                        CONÓCENOS
                                    </a>
                                </span>
                            </li>
                            <li class="nav-item" >
                                <span class=" navbar-brand fs-6">
                                    <a href="https://campusvirtual.upao.edu.pe/"
                                        class="link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover">
                                        <i data-feather="navigation" class="me-2 mb-2"></i>
                                        CONTÁCTANOS
                                    </a>
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