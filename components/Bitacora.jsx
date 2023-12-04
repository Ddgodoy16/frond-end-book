import React from 'react'
import { Header } from './Header';
import { useNavigate } from 'react-router-dom'

export const Bitacora = () => {
    const navegar = useNavigate();

    const Reservados = () => {
        navegar('/reservados');
    }
    const aInicio = () => {
        navegar('/inicioLaboratorio');
    }
    const Bitacora = () => {
        navegar('/bitacora');
    }

    return (
        <>
            <Header />

            <div className="d-flex justify-content-center mt-5">
                <h2 className="white-text d-flex justify-content-center">Bienvenidos a laboratorios</h2>
            </div>

            <div className="container mt-5 ">
                <div className="row justify-content-center">
                    <div class="card text-center" style={{ background: '#dee3e9' }}>
                        <div class="card-header" >
                            <ul class="nav nav-tabs card-header-tabs" >
                                <li class="nav-item " >
                                    <a class="nav-link active" onClick={aInicio}>Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" onClick={Reservados} >Reservados</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" onClick={Bitacora} >Bitacora</a>
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModalCenter1">Laboratorios Centroamérica - Tegucigalpa</button>
                        <button type="button" class="btn btn-primary " data-toggle="modal" data-target="#exampleModalCenter2">Laboratorios El Prado - Tegucigalpa</button>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter3">Laboratorios Norte - San Pedro Sula</button>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter4">Laboratorios Central - San Pedro Sula</button>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter5">Laboratorios La Ceiba</button>
                    </div>
                </div>
            </div>


            {/* 1 */}
            <div class="modal fade " id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg " role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <h5 className='text-center'>Laboratorios Centroamérica - Tegucigalpa</h5>
                        <div class="modal-body bg-dark">
                            <div className="row justify-content-center mt-4 bg-light">
                                <div className="col-md-8">
                                    <p>
                                        <strong>Estudiante:</strong> Fernando Lopez |
                                        <strong>Laboratorio:</strong> Laboratorio 001 |
                                        <strong>Fecha:</strong> 2023-11-10 |
                                        <strong>Hora de inicio:</strong> 10:00 AM |
                                        <strong>Hora de finalización:</strong> 12:00 PM
                                    </p>
                                </div>
                            </div>
                            

                            <div className="row justify-content-center mt-4 bg-light">
                                <div className="col-md-8">
                                    <p>
                                        <strong>Estudiante:</strong> Fernando Lopez |
                                        <strong>Laboratorio:</strong> Laboratorio 001 |
                                        <strong>Fecha:</strong> 2023-11-10 |
                                        <strong>Hora de inicio:</strong> 10:00 AM |
                                        <strong>Hora de finalización:</strong> 12:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="row justify-content-center mt-4 bg-light">
                                <div className="col-md-8">
                                    <p>
                                        <strong>Estudiante:</strong> Fernando Lopez |
                                        <strong>Laboratorio:</strong> Laboratorio 001 |
                                        <strong>Fecha:</strong> 2023-11-10 |
                                        <strong>Hora de inicio:</strong> 10:00 AM |
                                        <strong>Hora de finalización:</strong> 12:00 PM
                                    </p>
                                </div>
                            </div>
                            
                            <div className="row justify-content-center mt-4 bg-light">
                                <div className="col-md-8">
                                    <p>
                                        <strong>Estudiante:</strong> Fernando Lopez |
                                        <strong>Laboratorio:</strong> Laboratorio 001 |
                                        <strong>Fecha:</strong> 2023-11-10 |
                                        <strong>Hora de inicio:</strong> 10:00 AM |
                                        <strong>Hora de finalización:</strong> 12:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="row justify-content-center mt-4 bg-light">
                                <div className="col-md-8">
                                    <p>
                                        <strong>Estudiante:</strong> Fernando Lopez |
                                        <strong>Laboratorio:</strong> Laboratorio 001 |
                                        <strong>Fecha:</strong> 2023-11-10 |
                                        <strong>Hora de inicio:</strong> 10:00 AM |
                                        <strong>Hora de finalización:</strong> 12:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2*/}
            <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <h5 className='text-center'>Laboratorios El Prado - Tegucigalpa</h5>
                        <div class="modal-body bg-dark">
                            <div className="row justify-content-center mt-4 bg-light">
                                <div className="col-md-8">
                                    <p>
                                        <strong>Estudiante:</strong> Fernando Lopez |
                                        <strong>Laboratorio:</strong> Laboratorio 001 |
                                        <strong>Fecha:</strong> 2023-11-10 |
                                        <strong>Hora de inicio:</strong> 10:00 AM |
                                        <strong>Hora de finalización:</strong> 12:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* 3*/}
            <div class="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <h5 className='text-center'>Laboratorios Norte - San Pedro Sula</h5>
                        <div class="modal-body bg-dark">
                            <div className="row justify-content-center mt-4 bg-light">
                                <div className="col-md-8">
                                    <p>
                                        <strong>Estudiante:</strong> Fernando Lopez |
                                        <strong>Laboratorio:</strong> Laboratorio 001 |
                                        <strong>Fecha:</strong> 2023-11-10 |
                                        <strong>Hora de inicio:</strong> 10:00 AM |
                                        <strong>Hora de finalización:</strong> 12:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* 4*/}
            <div class="modal fade" id="exampleModalCenter4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <h5 className='text-center'>Laboratorios Central - San Pedro Sula</h5>
                        <div class="modal-body bg-dark">
                            <div className="row justify-content-center mt-4 bg-light">
                                <div className="col-md-8">
                                    <p>
                                        <strong>Estudiante:</strong> Fernando Lopez |
                                        <strong>Laboratorio:</strong> Laboratorio 001 |
                                        <strong>Fecha:</strong> 2023-11-10 |
                                        <strong>Hora de inicio:</strong> 10:00 AM |
                                        <strong>Hora de finalización:</strong> 12:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* 5*/}
            <div class="modal fade" id="exampleModalCenter5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <h5 className='text-center'>Laboratorios La Ceiba</h5>
                        <div class="modal-body bg-dark">
                            <div className="row justify-content-center mt-4 bg-light">
                                <div className="col-md-8">
                                    <p>
                                        <strong>Estudiante:</strong> Fernando Lopez |
                                        <strong>Laboratorio:</strong> Laboratorio 001 |
                                        <strong>Fecha:</strong> 2023-11-10 |
                                        <strong>Hora de inicio:</strong> 10:00 AM |
                                        <strong>Hora de finalización:</strong> 12:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};


