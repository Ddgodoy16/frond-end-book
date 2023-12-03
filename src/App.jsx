import React from 'react'
import { LogIn } from '../components/LogIn'
import { InicioLaboratorio } from '../components/InicioLaboratorio'
import { Reservados } from '../components/Reservados'
import { Registro } from '../components/Registro'
import { Bitacora } from '../components/Bitacora'
import { CardReserva } from '../components/CardReserva'
import { CardUniversidades } from '../components/CardUniversidades'
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LogIn />}  ></Route>
          <Route path='/inicioLaboratorio' element={<InicioLaboratorio />}  ></Route>
          <Route path='/reservados' element={<Reservados />}  ></Route>
          <Route path='/registro' element={<Registro />}  ></Route>
          <Route path='/bitacora' element={<Bitacora />}  ></Route>
          <Route path='/cardReserva' element={<CardReserva />}  ></Route>
          <Route path='/cardUniversidades' element={<CardUniversidades />}  ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
