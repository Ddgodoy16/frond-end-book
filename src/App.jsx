import React from 'react'
import { LogIn } from '../components/LogIn'
import { InicioLaboratorio } from '../components/InicioLaboratorio'
import { ReservarLaboratorio } from '../components/ReservarLaboratorio'
import { ReservarLaboratorio2 } from '../components/ReservarLaboratorio2'
import { ReservarLaboratorio3 } from '../components/ReservarLaboratorio3'
import { ReservarLaboratorio4 } from '../components/ReservarLaboratorio4'
import { ReservarLaboratorio5 } from '../components/ReservarLaboratorio5'
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
          <Route path='/reservarLaboratorio' element={<ReservarLaboratorio />}  ></Route>
          <Route path='/reservarLaboratorio2' element={<ReservarLaboratorio2 />}  ></Route>
          <Route path='/reservarLaboratorio3' element={<ReservarLaboratorio3 />}  ></Route>
          <Route path='/reservarLaboratorio4' element={<ReservarLaboratorio4 />}  ></Route>
          <Route path='/reservarLaboratorio5' element={<ReservarLaboratorio5 />}  ></Route>
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
