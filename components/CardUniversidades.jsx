import React from 'react'
import Ceiba from '/img/ceiba.jpg';
import Centroamerica from '/img/centroamerica.jpg';
import Prados from '/img/prado.jpg';
import Norte from '/img/norte.jpg';
import Central from '/img/central.jpg';
import { useNavigate } from 'react-router-dom';

export const CardUniversidades = () => {
    const navegar = useNavigate();
    const ReservarLaboratorio = () => {
        navegar('/reservarLaboratorio');
    }
    const ReservarLaboratorio2 = () => {
        navegar('/reservarLaboratorio2');
    }
    const ReservarLaboratorio3 = () => {
        navegar('/reservarLaboratorio3');
    }
    const ReservarLaboratorio4 = () => {
        navegar('/reservarLaboratorio4');
    }
    const ReservarLaboratorio5 = () => {
        navegar('/reservarLaboratorio5');
    }


    return (
        <>
            <div className="container mt-2 " style={{ background: '#dee3e9', padding: '20px' }}>
                <div className="row justify-content-center ">
                    <div className="card shadow bg-light" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Centroamerica} alt="Card image cap" />
                        <div className="card-body " >
                            <h5 className="card-title">Laboratorios Centroamérica - Tegucigalpa</h5>
                            <a className="btn btn-primary mt-4" onClick={ReservarLaboratorio}  >Reservar</a>
                        </div>
                    </div>

                    <div className="card shadow bg-light" style={{ width: '18rem' }}>
                        <img className="card-img-top " src={Prados} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Laboratorios El Prado - Tegucigalpa</h5>
                            <a href="" className="btn btn-primary mt-4" onClick={ReservarLaboratorio2} >Reservar</a>
                        </div>
                    </div>

                    <div className="card shadow bg-light" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Norte} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Laboratorios Norte - San Pedro Sula</h5>
                            <a href="" className="btn btn-primary   mt-4" onClick={ReservarLaboratorio3} >Reservar</a>
                        </div>
                    </div>

                    <div className="card shadow bg-light" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Central} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Laboratorios Central - San Pedro Sula</h5>
                            <a href="" className="btn btn-primary   mt-4" onClick={ReservarLaboratorio4} >Reservar</a>
                        </div>
                    </div>

                    <div className="card shadow bg-light" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Ceiba} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Laboratorios La Ceiba</h5>
                            <a href="" className="btn btn-primary   mt-5" onClick={ReservarLaboratorio5} >Reservar</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
