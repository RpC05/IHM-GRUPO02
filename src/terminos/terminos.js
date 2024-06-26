import React from 'react';
import Basic from '../layout/basic';
import '../styles/terminos.css';

const Terminos = () => {
    return (
        <Basic>
            <terminos>
                <div className="container">
                    <div className="container text-center">
                        <div className="col">
                            <h1>TÉRMINOS Y CONDICIONES</h1>
                        </div>
                        <div className="col">
                            <h6>LOS TÉRMINOS DE USO Y POLÍTICA DE TRATO DE DATOS E INFORMACIÓN DE LOS USUARIOS
                                PARA SU CONSERVACIÓN, ELIMINACIÓN O ENVÍO DE ACUERDO A LAS LEYES DENTRO DE LA
                                JURISTICCIÓN DE LA UNIÓN EUROPEA Y OTRA SECCIÓN FUERA DE ELLA EXCEPTUANDO EL ESTADO
                                DE CALIFORNIA DE TRATO ESPECIAL.</h6><br></br>
                        </div>
                    </div>

                    <div className="col-terms-details">

                        <div className="col">
                            <p className="text">El presente acuerdo es una comunicación entre el usuario (mayor de 18 años quien lo está usando
                                o en otro caso un menor con la autorización del padre y control) usando los servicios que ofrece
                                la página web, así como sus enlaces. Este es de carácter jurídico legal y compromete a usted y a
                                la empresa proveedora del sitio web con el que accede. TECNO ALEX S.A.C. es quien da la información
                                en el sitio y es responsable de todo lo que se publica y transmite por el sitio. Necesita conocer sus
                                derechos para saber que puede hacer y las diversas restricciones que puede haber con su uso.
                            </p>
                        </div>
                        <div className="col">
                            <p className="text">
                                <span>1. PROPIEDAD INTELECTUAL</span>
                                <br></br>
                                <span>2. DERECHOS COMO CONSUMIDOR</span>
                                <br></br>
                                <span>3. DATOS RECOPILADOS DE USTED</span>
                                <br></br>
                                <span>4. CONSERVACIÓN DE DATOS</span>
                                <br></br>
                                <span>5. CANCELACIÓN O ELIMINACIÓN DE SUS DATOS</span>
                                <br></br>
                                <span>6. CONDUCTA ACEPTADA Y RECHAZADA EN EL SITIO WEB</span>
                            </p>
                        </div>
                        <div className="col">
                            <p className="text">
                                <h6>1. Propiedad intelectual.</h6> 
                                El presente sitio web, imágenes, contenido, videos, texto, o cualquier otra información brindada que
                                no sea en excepciones dicha pertenece a la propiedad intelectual de TECNO ALEX S.A.C. así como sus
                                asociados. Se PROHIBE el uso del material para proyectos personales, sea de carácter comercial u otro
                                índole en excepción de aprobación por los mismos.
                            </p>
                        </div>
                    </div>
                </div>
            </terminos>
        </Basic>
    );
}
export default Terminos;