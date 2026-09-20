import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import amor1 from '../screens/amor1.png'
import amor2 from '../screens/amor.png'
import amor3 from '../screens/amor3.png'

function App() {
  const [codigo, setCodigo] = useState('')
  const [procesando, setProcesando] = useState(false)

  const navigate = useNavigate()

  const verificarCodigo = () => {

    if (procesando) return

    if (codigo.trim().toLowerCase() === 'evildead') {

      setProcesando(true)

      setTimeout(() => {
        navigate('/primera-pista')
      }, 8000)

    } else {

      alert('Ese no es el código correcto, princesa ♡')

    }
  }

  const manejarEnter = (e) => {
    if (e.key === 'Enter') {
      verificarCodigo()
    }
  }

  /*
  ==========================================
  PANTALLA DE CARGA
  ==========================================
  */

  if (procesando) {

    return (
      <main className="processing-page">


        <div className="loading-stars">

          <span>✦</span>
          <span>✧</span>
          <span>⋆</span>
          <span>✦</span>
          <span>✧</span>
          <span>⋆</span>
          <span>✦</span>
          <span>✧</span>
          <span>⋆</span>
          <span>✦</span>

        </div>


        <div className="lanterns">

          <span>🏮</span>
          <span>🏮</span>
          <span>🏮</span>
          <span>🏮</span>
          <span>🏮</span>
          <span>🏮</span>

        </div>


        <div className="character rapunzel">

          <div className="character-glow">
            ✨
          </div>

          <div className="character-face">
            👸🏻
          </div>

          <div className="character-name">
            Rapunzel
          </div>

        </div>


        <div className="character flynn">

          <div className="character-glow">
            ✨
          </div>

          <div className="character-face">
            🤴🏻
          </div>

          <div className="character-name">
            Flynn
          </div>

        </div>


        <div className="tower">

          <div className="tower-window">
            ✨
          </div>

          <div className="tower-top">
            ▲
          </div>

        </div>



        <div className="processing-card">

          <div className="processing-sun">
            ✺
          </div>

          <h1>
            Procesando...
          </h1>

          <p>
            El código ha sido aceptado,
            princesa ♡
          </p>

          <p className="processing-message">
            Preparando tu próxima aventura...
          </p>



          <div className="loader">

            <div className="loader-star">
              ✦
            </div>

          </div>


          <div className="processing-dots">

            <span>✦</span>
            <span>✧</span>
            <span>✦</span>

          </div>

        </div>

      </main>
    )
  }


  return (
    <main className="login-page">

      <div className="stars">

        <span>✦</span>
        <span>✧</span>
        <span>✦</span>
        <span>⋆</span>
        <span>✧</span>
        <span>✦</span>
        <span>⋆</span>
        <span>✧</span>

      </div>


      <section className="login-card">

        <div className="header">

          <div className="sun">
            ✺
          </div>

          <h1>
            Bienvenida,
            <span> princesa </span>
          </h1>

          <p>
            Comencemos a escribir una nueva historia juntos
          </p>

        </div>


        {/* FOTOS */}

        <div className="photo-gallery">

          <div className="photo photo-left">

            <img
              src={amor3}
              alt="Nuestro recuerdo"
            />

          </div>


          <div className="photo photo-center">

            <img
              src={amor1}
              alt="Nuestro recuerdo"
            />

          </div>


          <div className="photo photo-right">

            <img
              src={amor2}
              alt="Nuestro recuerdo"
            />

          </div>

        </div>


        <div className="divider">

          <span>✦</span>

        </div>


        {/* ACCESO */}

        <div className="access">

          <h2>
            Ingrese su código de acceso de 8 letras
          </h2>

          <p className="access-subtitle">
            princesa ♡
          </p>


          <div className="input-container">

            <input
              type="password"
              placeholder="Ingrese su código..."
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              onKeyDown={manejarEnter}
              disabled={procesando}
            />

          </div>


          <button
            className="enter-button"
            onClick={verificarCodigo}
            disabled={procesando}
          >

            Entrar

            <span>
              ✦
            </span>

          </button>

        </div>


        <p className="bottom-message">
          Hecho con amor, solo para ti ♡
        </p>

      </section>

    </main>
  )
}

export default App