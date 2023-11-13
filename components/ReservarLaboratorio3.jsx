import React from 'react';
import Norte from '/img/norte.jpg';
import { Header } from './Header';
import { useNavigate } from 'react-router-dom';

export const ReservarLaboratorio3 = () => {
    const navegar = useNavigate();

    const ReservarLaboratorio = () => {

    }

    const CancelarReserva = () => {
        navegar('/inicioLaboratorio');
    }

    return (
        <>
            <Header />
            <div className='container mt-4'>
                <h1 className='white-text text-center mb-4'>Reservar Laboratorio</h1>
                <div className='card p-4'>
                    <h2 className='text-center'>Sede Ceutec: Laboratorios Norte - San Pedro Sula</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <form>
                                <div className='mb-3'>
                                    <label className='form-label'>Fecha</label>
                                    <input type='date' className='form-control' />
                                </div>
                                <div className='mb-3'>
                                    <h3>Establecer hora</h3>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Hora de inicio</label>
                                    <input type='time' className='form-control' id='horaInicio' />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Hora de finalización</label>
                                    <input type='time' className='form-control' id='horaFin' />
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Laboratorios</label>
                                    <select className='form-select'>
                                        <option value='Laboratorio 001'>Laboratorio 001</option>
                                        <option value='Laboratorio 002'>Laboratorio 002</option>
                                        <option value='Laboratorio 003'>Laboratorio 003</option>
                                        <option value='Laboratorio 004'>Laboratorio 004</option>
                                        <option value='Laboratorio 005'>Laboratorio 005</option>
                                    </select>
                                </div>

                            </form>
                        </div>

                        <div class="A col-md-6 mt-5 text-center">
                            <img class="img-fluid mt-5 img-large" src={Norte} alt="Card image cap" />
                        </div>


                        <div className="d-flex flex-column align-items-center mt-4">
                            <button className='btn btn-primary mb-3  ' onClick={ReservarLaboratorio}>Reservar Laboratorio</button>
                            <button className='btn btn-danger' onClick={CancelarReserva}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
