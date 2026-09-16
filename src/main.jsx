import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import PrimeraPista from './PrimeraPista.jsx'
import SegundaPista from './SegundaPista.jsx'
import Terror from './Terror.jsx'
import Diversion from './Diversion.jsx'
import Amor from './Amor.jsx'
import Inicio from './Inicio.jsx'
import Sorpresa from './Sorpresa.jsx'
import Final from './Final.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Inicio />}
        />

        {/* LOGIN / APP */}
        <Route
          path="/aventura"
          element={<App />}
        />

        <Route
          path="/primera-pista"
          element={<PrimeraPista />}
        />
        <Route
          path="/segunda-pista"
          element={<SegundaPista />}
        />

        <Route
          path="/terror"
          element={<Terror />}
        />

        <Route
          path="/amor"
          element={<Amor />}
        />

        <Route
          path="/diversion"
          element={<Diversion />}
        />

        <Route
          path="/sorpresa"
          element={<Sorpresa />}
        />

        <Route
          path="/final"
          element={<Final />}
        />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)