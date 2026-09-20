import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Inicio.css'

function Final() {
  const navigate = useNavigate()

  const [procesando, setProcesando] = useState(false)
  const [mostrarFecha, setMostrarFecha] = useState(false)
  const [mostrarPromesa, setMostrarPromesa] = useState(false)

  // NUEVO: ventana para pedir código
  const [mostrarCodigo, setMostrarCodigo] = useState(false)
  const [codigo, setCodigo] = useState('')
  const [errorCodigo, setErrorCodigo] = useState('')

  const aventuraActiva = true

  // ==========================================
  // COMENZAR AVENTURA
  // ==========================================

  const comenzarAventura = () => {
    if (!aventuraActiva || procesando) return

    setProcesando(true)

    setTimeout(() => {
      navigate('/aventura')
    }, 8000)
  }

  // ==========================================
  // VENTANA DE FECHA / DESTINO
  // ==========================================

  const abrirFecha = () => {
    setMostrarFecha(true)
  }

  const cerrarFecha = () => {
    setMostrarFecha(false)
  }

  // ==========================================
  // ABRIR VENTANA DEL CÓDIGO
  // ==========================================

  const abrirCodigo = () => {
    setCodigo('')
    setErrorCodigo('')
    setMostrarCodigo(true)
  }

  // ==========================================
  // CERRAR VENTANA DEL CÓDIGO
  // ==========================================

  const cerrarCodigo = () => {
    setMostrarCodigo(false)
    setCodigo('')
    setErrorCodigo('')
  }

  // ==========================================
  // COMPROBAR CÓDIGO
  // ==========================================

  const comprobarCodigo = () => {
    if (codigo.trim().toLowerCase() === 'teamo') {
      setErrorCodigo('')
      setMostrarCodigo(false)
      setMostrarPromesa(true)
      setCodigo('')
    } else {
      setErrorCodigo(
        'Ese no es el código correcto, princesa ♡'
      )
    }
  }

  // ==========================================
  // ENTER PARA COMPROBAR CÓDIGO
  // ==========================================

  const manejarEnter = (e) => {
    if (e.key === 'Enter') {
      comprobarCodigo()
    }
  }

  // ==========================================
  // VENTANA DE PROMESA
  // ==========================================

  const cerrarPromesa = () => {
    setMostrarPromesa(false)
  }

  // ==========================================
  // PANTALLA DE CARGA
  // ==========================================

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

        {/* FAROLITOS */}

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
            Y por fin llegó el día princesa ♡
          </p>

          <p className="processing-message">
            TE AMO
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

  // ==========================================
  // PANTALLA PRINCIPAL
  // ==========================================

  return (
    <main className="inicio-page">

      {/* ==========================================
          ESTRELLAS
          ========================================== */}

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

      {/* ==========================================
          FAROLITOS
          ========================================== */}

      <div className="inicio-lights">

        🏮

        <span>🏮</span>
        <span>🏮</span>
        <span>🏮</span>

      </div>

      {/* ==========================================
          TARJETA PRINCIPAL
          ========================================== */}

      <section className="inicio-card">

        <div className="inicio-sun">
          ✺
        </div>

        <div className="inicio-small-title">
          PARA MI PRINCESA
        </div>

        <h1>
          Nuestra aventura
          <br />
          termina aquí...
          <br />
          o ¿comienza?
        </h1>

        <div className="inicio-line">
          <span>♡</span>
        </div>

        <p className="inicio-message">
          Espero que este día te esté gustando mi amor...
          porque aún queda lo mejor ♡
        </p>

        <p className="inicio-submessage">
          ¿Estás lista para comenzar una nueva historia,
          juntos?
          <br />
          Si es así...
        </p>

        {/* ==========================================
            BOTÓN DESTINO
            ========================================== */}

        <button
          className="date-button"
          onClick={abrirFecha}
        >
          ♡ Presiona aquí para conocer nuestro destino final ♡
        </button>

        {/* ==========================================
            BOTÓN PROMESA
            ========================================== */}

        <button
          className="date-button"
          onClick={abrirCodigo}
        >
          ♡ Solo presionar cuando estés en tu destino ♡
        </button>

        <div className="inicio-footer">
          Hecho con amor para ti ♡
        </div>

      </section>

      {/* ==========================================
          VENTANA DEL DESTINO
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
              Ve a tu siguiente
              <br />
              y último destino
            </h2>

            <div className="date-divider">
              <span>♡</span>
            </div>

            <p className="date-intro">
              Para concluir este hermoso día,
              <br />
              dirígete a la siguiente dirección...
            </p>

            <div className="special-date">

              <span>
                Catedral 1330
              </span>

              <div>
                <strong>
                  Santiago
                </strong>
              </div>

            </div>

            <p className="date-love">

              Nunca olvides que
              <br />

              <strong>
                TE AMO
              </strong>

            </p>

            <div className="date-hearts">
              ♡ ✦ ♡
            </div>


            {/* BOTÓN CERRAR */}

            <button
              className="date-modal-button"
              onClick={cerrarFecha}
            >
              Cerrar ♡
            </button>

          </div>

        </div>

      )}

      {/* ==========================================
          VENTANA DEL CÓDIGO
          ========================================== */}

      {mostrarCodigo && (

        <div
          className="code-overlay"
          onClick={cerrarCodigo}
        >

          <div
            className="code-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* BRILLOS */}

            <div className="date-sparkles">
              ✦　✧　✦
            </div>

            {/* SOL */}

            <div className="date-sun">
              ✺
            </div>

            {/* TITULO */}

            <div className="date-small-title">
              SOLO PARA TI
            </div>

            <h2>
              Una pequeña
              <br />
              sorpresa ♡
            </h2>

            <div className="date-divider">
              <span>♡</span>
            </div>

            <p className="code-message">
              Para descubrir mi promesa,
              <br />
              necesitas conocer la palabra
              <br />
              que guarda mi corazón...
            </p>

            {/* INPUT */}

            <input
              type="password"
              value={codigo}
              onChange={(e) => {
                setCodigo(e.target.value)
                setErrorCodigo('')
              }}
              onKeyDown={manejarEnter}
              placeholder="Ingresa el código..."
              className="code-input"
              autoFocus
            />

            {/* ERROR */}

            {errorCodigo && (
              <p className="code-error">
                {errorCodigo}
              </p>
            )}

            {/* BOTÓN */}

            <button
              className="date-modal-button"
              onClick={comprobarCodigo}
            >
              ✦ Descubrir mi promesa ✦
            </button>

            {/* CERRAR */}

            <button
              className="date-modal-button"
              onClick={cerrarCodigo}
            >
              Cerrar ♡
            </button>

          </div>

        </div>

      )}

      {/* ==========================================
          VENTANA DE NUESTRA PROMESA
          ========================================== */}

      {mostrarPromesa && (

        <div
          className="pdf-overlay"
          onClick={cerrarPromesa}
        >

          <div
            className="pdf-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {/* BOTÓN X */}

            <button
              className="pdf-close"
              onClick={cerrarPromesa}
              aria-label="Cerrar promesa"
            >
              ×
            </button>

            {/* ENCABEZADO */}

            <div className="pdf-header">

              <div className="date-sparkles">
                ✦　✧　✦
              </div>

              <div className="date-sun">
                ✺
              </div>

              <div className="date-small-title">
                PARA MI PRINCESA
              </div>

              <h2>
                Nuestra promesa ♡
              </h2>

              <div className="date-divider">
                <span>
                  ♡
                </span>
              </div>

            </div>

            {/* IMAGEN DE LA PROMESA */}

            <div className="pdf-container">

              <img
                src="/promesa.png"
                alt="Nuestra promesa"
                className="promesa-image"
              />

            </div>

            {/* BOTÓN CERRAR */}

            <button
              className="date-modal-button"
              onClick={cerrarPromesa}
            >
              Cerrar ♡
            </button>

          </div>

        </div>

      )}

    </main>
  )
}

export default Final