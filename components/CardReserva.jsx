import React from 'react'
export const CardReserva = () => {

  return (
    <>
     <div class="list-group mt-3">
        <a class="list-group-item list-group-item-action flex-column align-items-start">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">Laboratorios Centroamérica - Tegucigalpa</h5>
            <p class="list-group-item-text">
              <strong>ESTUDIANTE:</strong> Fernando Lopez
            </p>
            <p class="list-group-item-text">
              <strong>Laboratorio:</strong> Laboratorio 001
            </p>
            <p class="list-group-item-text">
              <strong>Fecha:</strong> 2023-11-10
            </p>
            <p class="list-group-item-text">
              <strong>Hora de inicio:</strong> 10:00 AM
            </p>
            <p class="list-group-item-text">
              <strong>Hora de finalización:</strong> 12:00 PM
            </p>
          </div>
          <div class="d-flex justify-content-end mt-3">
            <button class="btn btn-danger ms-2">Cancelar</button>
          </div>
        </a>
      </div>
    </>
  )
}
