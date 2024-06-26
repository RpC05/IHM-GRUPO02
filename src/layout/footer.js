import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return <footer className="bd-footer bg-body-tertiary">
        <div className="footer-container-style py-4 py-md-5 px-4 px-md-3 text-center">
            <div>Todos los derechos reservados</div>
            <Link to="/terminos"
                class="text-light">
                <i data-feather="book" class="me-2 mb-2"></i>
                Términos y Condiciones
            </Link>
        </div>
    </footer>;
}
export default Footer;