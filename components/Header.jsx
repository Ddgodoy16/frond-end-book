import React from 'react'
import logo from '/img/logo-ceutec-retina.png';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
    const navegar = useNavigate();

    const Reservados = () => {
      navegar('/reservados');
    }
    const Inicio = () => {
      navegar('/inicioLaboratorio');
    }
  
    const Bitacora = () => {
      navegar('/bitacora');
    }
  
    const ReservarLaboratorio = () => {
      navegar('/reservarLaboratorio');
    }
    const Salir = () => {
        navegar('/');
      }
  
  return (
    <>
    <nav id="primerNavbar" class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><img className="logo" src={logo} alt="Logo" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">nombre <span class="sr-only">(ESTUDIANTE)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" onClick={Salir}>Salir</a>
            </li>
          </ul>
        </div>
      </nav>

    
    
    </>
  )
}
