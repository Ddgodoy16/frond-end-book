import React from 'react'
import "./styles.css"
import logo from '/img/logo-ceutec-retina.png';
import Fondo2 from '/img/fondo2.png';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

export const LogIn = () => {  

    const navegar = useNavigate();

    const IniciarSesion = () => {
        navegar('/inicioLaboratorio');
    }
    const Registro = () => {
        navegar('/registro');
    }

    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center">
                    <h1 className="white-text d-flex justify-content-center">Laboratorios</h1>
                    <img className="logo" src={logo} alt="Logo" />
                </div>

                <h5 className="white-text ms-3 mt-4">Inicio de sesión</h5>
                <div className="d-flex justify-content-start">
                    <div className="card">
                        <div className="card-body">
                            <form>
                              
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="correo"  />
                                    <label>Correo electrónico</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="contrasena" />
                                    <label>Contraseña</label>
                                </div>
                              
                                <div className="d-flex flex-column align-items-center mt-4">
                                    <button className="btn btn-primary mb-3 w-100" onClick={IniciarSesion} style={{ backgroundColor: '#25476a', color: '#fff' }}> Iniciar sesión </button>
                                    <button className="btn btn-secondary w-100" onClick={Registro}>Registrarse</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}