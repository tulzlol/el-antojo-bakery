import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <div className="main-footer">
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <h5>EL ANTOJO BAKERY</h5>
                        <ul className="list-unstyled">
                            <li>+54 11-2654-5432</li>
                            <li>Cordoba, Argentina</li>
                            <li>Calle falsa 100</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled">
                        <h5>Navegación rápida</h5>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled">
                        <h5>Redes sociales</h5>
                        <li>Facebook</li>
                        <li>Instagram</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <h6 className="col-sm">
                        &copy;{new Date().getFullYear()} EL ANTOJO BAKERY | Marco Nicolas Villani
                    </h6>
                </div>
            </div>
        </div>)
}

export default Footer;