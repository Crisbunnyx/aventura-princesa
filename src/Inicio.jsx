import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Inicio.css'

function Inicio() {
  const navigate = useNavigate()

  const [procesando, setProcesando] = useState(false)
  const [mostrarFecha, setMostrarFecha] = useState(false)

  const aventuraActiva = false

  const comenzarAventura = () => {
    if (!aventuraActiva || procesando) return

    setProcesando(true)

    setTimeout(() => {
      navigate('/aventura')
    }, 8000)
  }

  const abrirFecha = () => {
    setMostrarFecha(true)
  }

  const cerrarFecha = () => {
    setMostrarFecha(false)
  }

  // ==========================================
  // PANTALLA DE CARGA
  // ==========================================
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
          <div className="character-glow">✨</div>
          <div className="character-face">👸🏻</div>
          <div className="character-name">Rapunzel</div>
        </div>

        <div className="character flynn">
          <div className="character-glow">✨</div>
          <div className="character-face">🤴🏻</div>
          <div className="character-name">Flynn</div>
        </div>

        <div className="tower">
          <div className="tower-window">✨</div>
          <div className="tower-top">▲</div>
        </div>

        <div className="processing-card">
          <div className="processing-sun">✺</div>

          <h1>Procesando...</h1>

          <p>
            Y por fin llegó el día princesa ♡
          </p>

          <p className="processing-message">
            TE AMO
          </p>

          <div className="loader">
            <div className="loader-star">✦</div>
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

  // ==========================================
  // PANTALLA DE INICIO
  // ==========================================
  return (
    <main className="inicio-page">

      <div className="inicio-stars">
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

      <div className="inicio-lights">
        🏮
        <span>🏮</span>
        <span>🏮</span>
        <span>🏮</span>
      </div>

      <section className="inicio-card">

        <div className="inicio-sun">
          ✺
        </div>

        <div className="inicio-small-title">
          PARA MI PRINCESA
        </div>

        <h1>
          Nuestra
          <br />
          aventura
        </h1>

        <div className="inicio-line">
          <span>♡</span>
        </div>

        <p className="inicio-message">
          Hay historias que comienzan con una pequeña casualidad...
        </p>

        <p className="inicio-message">
          y terminan convirtiéndose en algo maravilloso.
        </p>

        <p className="inicio-submessage">
          ¿Estás lista para descubrir la nuestra?
        </p>

        <button
          className={`inicio-button ${
            !aventuraActiva ? 'inicio-button-locked' : ''
          }`}
          onClick={comenzarAventura}
          disabled={!aventuraActiva || procesando}
        >
          <span>
            {aventuraActiva
              ? '✦ Comenzar aventura ✦'
              : '🔒 Aventura bloqueada'}
          </span>
        </button>

        <button
          className="date-button"
          onClick={abrirFecha}
        >
          ♡ Ver fecha especial ♡
        </button>

        <div className="inicio-footer">
          Hecho con amor para ti ♡
        </div>

      </section>

      {/* ==========================================
          VENTANA DE FECHA ESPECIAL
          ========================================== */}

      {mostrarFecha && (
        <div
          className="date-overlay"
          onClick={cerrarFecha}
        >
          <div
            className="date-modal"
            onClick={(e) => e.stopPropagation()}
          >

            

            <div className="date-sparkles">
              ✦　✧　✦
            </div>

            <div className="date-sun">
              ✺
            </div>

            <div className="date-small-title">
              NUESTRA HISTORIA
            </div>

            <h2>
              Espero este día
              <br />
              sea perfecto
            </h2>

            <div className="date-divider">
              <span>♡</span>
            </div>

            <p className="date-intro">
              Hay fechas que son simplemente fechas...
            </p>

            <p className="date-main-text">
              pero hay otras que se convierten
              <br />
              en recuerdos para toda la vida.
            </p>

            <div className="special-date">
              <span>2x</span>
              <div>
                <strong>SEPTIEMBRE</strong>
                <small>2026</small>
              </div>
            </div>

            <p className="date-final-text">
              El día en que intentaré hacer que te sientas la mujer mas especial de este universo ♡
            </p>

            <p className="date-love">
              Tú eres mi camino
              <br />
              y siempre serás mi camino
            </p>

            <div className="date-hearts">
              ♡ ✦ ♡
            </div>

            <button
              className="date-modal-button"
              onClick={cerrarFecha}
            >
              Cerrar ♡
            </button>

          </div>
        </div>
      )}

    </main>
  )
}

export default Inicio