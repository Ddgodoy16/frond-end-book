import React from 'react';
import Ceiba from '/img/ceiba.jpg';
import Centroamerica from '/img/centroamerica.jpg';
import Prados from '/img/prado.jpg';
import Norte from '/img/norte.jpg';
import Central from '/img/central.jpg';
import './CardUniversidades.css';


export const CardUniversidades = () => {
    return (
        <>
            <div className="container mt-2" style={{ background: '#dee3e9', padding: '20px' }}>
                <div className="row justify-content-center">
                    <div className="card-container card shadow bg-light" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Centroamerica} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Laboratorios Centroamérica - Tegucigalpa</h5>
                            <button type="button" class="btn btn-primary mt-4" data-toggle="modal" data-target="#exampleModalCenter1">Reservar</button>
                        </div>
                    </div>

                    <div className="card-container card shadow bg-light" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Prados} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Laboratorios El Prado - Tegucigalpa</h5>
                            <button type="button" class="btn btn-primary mt-4" data-toggle="modal" data-target="#exampleModalCenter2">Reservar</button>
                        </div>
                    </div>

                    <div className="card-container card shadow bg-light" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Norte} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Laboratorios Norte - San Pedro Sula</h5>
                            <button type="button" class="btn btn-primary mt-4" data-toggle="modal" data-target="#exampleModalCenter3">Reservar</button>
                        </div>
                    </div>

                    <div className="card-container card shadow bg-light" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Central} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Laboratorios Central - San Pedro Sula</h5>
                            <button type="button" class="btn btn-primary mt-4" data-toggle="modal" data-target="#exampleModalCenter4">Reservar</button>
                        </div>
                    </div>

                    <div className="card-container card shadow bg-light" style={{ width: '18rem' }}>
                        <img className="card-img-top" src={Ceiba} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Laboratorios La Ceiba</h5>
                            <button type="button" class="btn btn-primary mt-5" data-toggle="modal" data-target="#exampleModalCenter5">Reservar</button>
                        </div>
                    </div>
                </div>
            </div>



            {/* MODALES */}

            {/* 1 */}
            <div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <h5 className='text-center'>Ceutec sede Centroamérica Laboratorios  - Tegucigalpa</h5>
                            <div className="row justify-content-center mt-4">
                                <div className="col-md-6">
                                    <form className="d-flex flex-column align-items-center">
                                        <div className='mb-3'>
                                            <label className='form-label'>Fecha:</label>
                                            <input type='date' className='form-control' />
                                        </div>
                                        <div className='mb-3'>
                                            <h5>Establecer hora</h5>
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Hora de inicio:</label>
                                            <input type='time' className='form-control' id='horaInicio' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Hora de finalización:</label>
                                            <input type='time' className='form-control' id='horaFin' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Laboratorios:</label>
                                            <select className='form-select' defaultValue='' required>
                                                <option value='' disabled hidden>Seleccionar laboratorio</option>
                                                <option value='Laboratorio 001'>Laboratorio 001</option>
                                                <option value='Laboratorio 002'>Laboratorio 002</option>
                                                <option value='Laboratorio 003'>Laboratorio 003</option>
                                                <option value='Laboratorio 004'>Laboratorio 004</option>
                                                <option value='Laboratorio 005'>Laboratorio 005</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Confirmar reservación </button>
                        </div>
                    </div>
                </div>
            </div>

             {/* 2 */}
             <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <h5 className='text-center'>Ceutec sede El Prado - Tegucigalpa</h5>
                            <div className="row justify-content-center mt-4">
                                <div className="col-md-6">
                                    <form className="d-flex flex-column align-items-center">
                                        <div className='mb-3'>
                                            <label className='form-label'>Fecha:</label>
                                            <input type='date' className='form-control' />
                                        </div>
                                        <div className='mb-3'>
                                            <h5>Establecer hora</h5>
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Hora de inicio:</label>
                                            <input type='time' className='form-control' id='horaInicio' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Hora de finalización:</label>
                                            <input type='time' className='form-control' id='horaFin' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Laboratorios:</label>
                                            <select className='form-select' defaultValue='' required>
                                                <option value='' disabled hidden>Seleccionar laboratorio</option>
                                                <option value='Laboratorio 001'>Laboratorio 001</option>
                                                <option value='Laboratorio 002'>Laboratorio 002</option>
                                                <option value='Laboratorio 003'>Laboratorio 003</option>
                                                <option value='Laboratorio 004'>Laboratorio 004</option>
                                                <option value='Laboratorio 005'>Laboratorio 005</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Confirmar reservación </button>
                        </div>
                    </div>
                </div>
            </div>


            
             {/* 3 */}
             <div class="modal fade" id="exampleModalCenter3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <h5 className='text-center'>Ceutec sede Norte - San Pedro Sula</h5>
                            <div className="row justify-content-center mt-4">
                                <div className="col-md-6">
                                    <form className="d-flex flex-column align-items-center">
                                        <div className='mb-3'>
                                            <label className='form-label'>Fecha:</label>
                                            <input type='date' className='form-control' />
                                        </div>
                                        <div className='mb-3'>
                                            <h5>Establecer hora</h5>
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Hora de inicio:</label>
                                            <input type='time' className='form-control' id='horaInicio' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Hora de finalización:</label>
                                            <input type='time' className='form-control' id='horaFin' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Laboratorios:</label>
                                            <select className='form-select' defaultValue='' required>
                                                <option value='' disabled hidden>Seleccionar laboratorio</option>
                                                <option value='Laboratorio 001'>Laboratorio 001</option>
                                                <option value='Laboratorio 002'>Laboratorio 002</option>
                                                <option value='Laboratorio 003'>Laboratorio 003</option>
                                                <option value='Laboratorio 004'>Laboratorio 004</option>
                                                <option value='Laboratorio 005'>Laboratorio 005</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Confirmar reservación </button>
                        </div>
                    </div>
                </div>
            </div>



             {/* 4 */}
             <div class="modal fade" id="exampleModalCenter4" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <h5 className='text-center'>Ceutec sede Central - San Pedro Sula</h5>
                            <div className="row justify-content-center mt-4">
                                <div className="col-md-6">
                                    <form className="d-flex flex-column align-items-center">
                                        <div className='mb-3'>
                                            <label className='form-label'>Fecha:</label>
                                            <input type='date' className='form-control' />
                                        </div>
                                        <div className='mb-3'>
                                            <h5>Establecer hora</h5>
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Hora de inicio:</label>
                                            <input type='time' className='form-control' id='horaInicio' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Hora de finalización:</label>
                                            <input type='time' className='form-control' id='horaFin' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Laboratorios:</label>
                                            <select className='form-select' defaultValue='' required>
                                                <option value='' disabled hidden>Seleccionar laboratorio</option>
                                                <option value='Laboratorio 001'>Laboratorio 001</option>
                                                <option value='Laboratorio 002'>Laboratorio 002</option>
                                                <option value='Laboratorio 003'>Laboratorio 003</option>
                                                <option value='Laboratorio 004'>Laboratorio 004</option>
                                                <option value='Laboratorio 005'>Laboratorio 005</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Confirmar reservación </button>
                        </div>
                    </div>
                </div>
            </div>


            
             {/* 5 */}
             <div class="modal fade" id="exampleModalCenter5" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <div class="modal-body">
                            <h5 className='text-center'>Ceutec sede La Ceiba</h5>
                            <div className="row justify-content-center mt-4">
                                <div className="col-md-6">
                                    <form className="d-flex flex-column align-items-center">
                                        <div className='mb-3'>
                                            <label className='form-label'>Fecha:</label>
                                            <input type='date' className='form-control' />
                                        </div>
                                        <div className='mb-3'>
                                            <h5>Establecer hora</h5>
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Hora de inicio:</label>
                                            <input type='time' className='form-control' id='horaInicio' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Hora de finalización:</label>
                                            <input type='time' className='form-control' id='horaFin' />
                                        </div>
                                        <div className='mb-3'>
                                            <label className='form-label'>Laboratorios:</label>
                                            <select className='form-select' defaultValue='' required>
                                                <option value='' disabled hidden>Seleccionar laboratorio</option>
                                                <option value='Laboratorio 001'>Laboratorio 001</option>
                                                <option value='Laboratorio 002'>Laboratorio 002</option>
                                                <option value='Laboratorio 003'>Laboratorio 003</option>
                                                <option value='Laboratorio 004'>Laboratorio 004</option>
                                                <option value='Laboratorio 005'>Laboratorio 005</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-primary">Confirmar reservación </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
