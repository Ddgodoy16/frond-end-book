import React from 'react';
import logo from '/img/logo-ceutec-retina.png';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navegar = useNavigate();

  const salir = () => {
    navegar('/');
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img className="logo" src={logo} alt="Logo" />
      
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" onClick={() => navegar('/inicioLaboratorio')}>
              Nombre <span class="sr-only">(Tipo Usuario)</span>
            </a>
          </li>
              
        </ul>
        <button class="btn btn-outline-danger my-2 my-sm-0" type="button" onClick={salir}>
          Salir
        </button>
      </div>
    </nav>
  );
};
