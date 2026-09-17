import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Terror.css'
import pelis from '../screens/pelis.png'

function Amor() {
  const [codigo, setCodigo] = useState('')
  const [procesando, setProcesando] = useState(false)

  const navigate = useNavigate()

  const verificarCodigo = () => {
    if (procesando) return

    if (codigo.trim() === 'tueresmicamino') {
      setProcesando(true)

      setTimeout(() => {
        navigate('/final')
      }, 5000)

    } else {
      alert('Ese no es el código correcto, princesa ♡')
    }
  }

  const manejarEnter = (e) => {
    if (e.key === 'Enter') {
      verificarCodigo()
    }
  }

  /* =========================
     PANTALLA DE CARGA
     ========================= */

  if (procesando) {
    return (
      <main className="processing-page">

        {/* ESTRELLAS */}
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

        {/* LINTERAS */}
        <div className="lanterns">
          <span>🏮</span>
          <span>🏮</span>
          <span>🏮</span>
          <span>🏮</span>
          <span>🏮</span>
          <span>🏮</span>
        </div>

        {/* RAPUNZEL */}
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

        {/* FLYNN */}
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

        {/* TORRE */}
        <div className="tower">

          <div className="tower-window">
            ✨
          </div>

          <div className="tower-top">
            ▲
          </div>

        </div>

        {/* TARJETA DE CARGA */}
        <div className="processing-card">

          <div className="processing-sun">
            ✺
          </div>

          <h1>
            Procesando...
          </h1>

          <p>
            El código ha sido aceptado, princesa ♡
          </p>

          <p className="processing-message">
            Preparando tu próxima aventura...
          </p>

          {/* LOADER */}
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

  /* =========================
     PRIMERA PISTA
     ========================= */

  return (
    <main className="pista-page">

      <div className="pista-stars">
        <span>✦</span>
        <span>✧</span>
        <span>⋆</span>
        <span>✦</span>
        <span>✧</span>
        <span>⋆</span>
        <span>✦</span>
      </div>

      <section className="pista-card">

        <div className="pista-sun">
          ✺
        </div>

        <h1>
          Episodio de Pelis y Amor
        </h1>

        <div className="gold-line">
          <span>✦</span>
        </div>

        <div className="pista-photo">

          <img
            src={pelis}
            alt="Nuestra primera pista"
          />

        </div>

        <div className="pista-text">

          <p>
            Si escogiste esta opción tienes que estar preparada para ver "Resident Evil: Noche Cero" en el formato que tu escojas
          </p>

          <p className="carriage-message">
            (Dirijase a la siguiente dirección. TE AMO).
          </p>

        </div>

        <div className="address">

          <span>♡</span>

          <p>
            Av. Padre Hurtado Sur 875, Las Condes.
          </p>

          <span>♡</span>

        </div>

        <div className="next-access">

          <h2>
            Cuando estés lista...
          </h2>

          <p>
            Ingresa el código el cual debes completar, "tueresmi____"
          </p>

          <div className="pista-input">

            <input
              type="password"
              placeholder="Ingrese el código..."
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              onKeyDown={manejarEnter}
              disabled={procesando}
            />

          </div>

          <button
            className="pista-button"
            onClick={verificarCodigo}
            disabled={procesando}
          >
            Continuar ✦
          </button>

        </div>

        <p className="love-message">
          Tu príncipe te espera ♡
        </p>

      </section>

    </main>
  )
}

export default Amor