import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SegundaPista.css'
import opcion1 from '../screens/opcion1.png'
import opcion2 from '../screens/opcion2.png'
import opcion3 from '../screens/opcion3.png'
import amor5 from '../screens/amor5.png'

function SegundaPista() {
  const [codigo, setCodigo] = useState('')
  const [procesando, setProcesando] = useState(false)
  const [opcionActiva, setOpcionActiva] = useState(null)

  const navigate = useNavigate()

  const verificarCodigo = () => {
    if (procesando) return

    if (codigo.trim().toLowerCase() === 'sakura') {
      setProcesando(true)

      setTimeout(() => {
        navigate('/terror')
      }, 5000)
    }
    else if (codigo.trim().toLowerCase() === 'todo') {
      setProcesando(true)

      setTimeout(() => {
        navigate('/diversion')
      }, 5000)
    } 

    else if (codigo.trim().toLowerCase() === 'potito') {
      setProcesando(true)

      setTimeout(() => {
        navigate('/amor')
      }, 5000)
    } 

    else if (codigo.trim().toLowerCase() === 'daddyyankee') {
      setProcesando(true)

      setTimeout(() => {
        navigate('/sorpresa')
      }, 5000)
    } 
    
    else {
      alert('Ese no es el código correcto, princesa ♡')
    }
  }

  const manejarEnter = (e) => {
    if (e.key === 'Enter') {
      verificarCodigo()
    }
  }

  const voltearOpcion = (numero) => {
    setOpcionActiva(
      opcionActiva === numero ? null : numero
    )
  }

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
            El código ha sido aceptado, princesa ♡
          </p>

          <p className="processing-message">
            Preparando tu próxima aventura...
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
          Segundo Episodio
        </h1>

        <div className="gold-line">
          <span>✦</span>
        </div>

        <div className="pista-text">

          <p>
            Que bonita que fue nuestra primera cita mi amor,
            yo yendo todo nervioso con flores por las calles
            y usted esperándome toda hermosa en el mall,
            para luego ir a ver la película con la que todo
            empezó mi amor...
          </p>

          <p className="carriage-message">
            TE AMO
          </p>

        </div>

        <div className="pista-photo">

          <img
            src={amor5}
            alt="Nuestra primera cita"
          />

        </div>

        <div className="pista-text">

          <p>
            Ahora que lograste obtener el segundo código
            princesa, debes dirigirte a la siguiente dirección,
            en donde encontrarás a tu príncipe y el siguiente
            código.
          </p>

          <p className="carriage-message">
            (Cuando lea esto, dígale a su príncipe para que le
            pidan su carruaje).
          </p>

        </div>

        <div className="address">

          <span>♡</span>

          <p>
            Avenida Vitacura 7125
          </p>

          <span>♡</span>

        </div>

        <div className="next-access">

          <h2>
            En esta ocasión debes escoger una de 3 opciones
            para decidir donde iremos ahora.
            <br />
            Cuando estés lista...
          </h2>

          {/* OPCIONES VOLTEABLES */}
          <div className="options-container">

            {/* OPCIÓN 1 */}
            <button
              type="button"
              className={`option-card ${
                opcionActiva === 1 ? 'flipped' : ''
              }`}
              onClick={() => voltearOpcion(1)}
              aria-label="Voltear opción uno"
            >

              <div className="option-inner">

                <div className="option-front">

                  <img
                    src={opcion1}
                    alt="Diversión, nieve y risas"
                  />

                  <div className="option-text">
                    Diversión, adrenalina, risas
                  </div>

                </div>

                <div className="option-back">

                  <div className="back-sun">
                    ✺
                  </div>

                  <h3>
                    Una aventura para caerse de risa
                  </h3>

                  <p>
                    El código para este plan es: <b>Lo que más me gusta de tí</b>
                  </p>

                </div>

              </div>

            </button>


            {/* OPCIÓN 2 */}
            <button
              type="button"
              className={`option-card ${
                opcionActiva === 2 ? 'flipped' : ''
              }`}
              onClick={() => voltearOpcion(2)}
              aria-label="Voltear opción dos"
            >

              <div className="option-inner">

                <div className="option-front">

                  <img
                    src={opcion2}
                    alt="Charla, terror y comida"
                  />

                  <div className="option-text">
                    Charla, terror, comida
                  </div>

                </div>

                <div className="option-back">

                  <div className="back-sun">
                    ✺
                  </div>

                  <h3>
                    Experiencia terrorificamente hermosa
                  </h3>

                  <p>
                    El código para este plan es: <b>Mi flor favorita</b>
                  </p>

                </div>

              </div>

            </button>


            {/* OPCIÓN 3 */}
            <button
              type="button"
              className={`option-card ${
                opcionActiva === 3 ? 'flipped' : ''
              }`}
              onClick={() => voltearOpcion(3)}
              aria-label="Voltear opción tres"
            >

              <div className="option-inner">

                <div className="option-front">

                  <img
                    src={opcion3}
                    alt="Películas, amor y besitos"
                  />

                  <div className="option-text">
                    Películas, amor, besitos
                  </div>

                </div>

                <div className="option-back">

                  <div className="back-sun">
                    ✺
                  </div>

                  <h3>
                    Día de pelis
                  </h3>

                  <p>
                    El código para este plan es: <b>El nombre de tu oso grande</b>
                  </p>

                </div>

              </div>

            </button>

            {/* OPCIÓN SORPRESA */}
<button
  type="button"
  className={`option-card surprise-card ${
    opcionActiva === 4 ? 'flipped' : ''
  }`}
  onClick={() => voltearOpcion(4)}
  aria-label="Voltear opción sorpresa"
>
  <div className="option-inner">

    {/* FRENTE */}
    <div className="option-front surprise-front">

      <div className="surprise-question">
        ?
      </div>

      <div className="surprise-title">
        OPCIÓN<br />
        SORPRESA
      </div>

      <div className="surprise-hearts">
        ♡ ✦ ♡
      </div>

    </div>

    {/* PARTE TRASERA */}
    <div className="option-back surprise-back">

      <div className="back-sparkles">
        ✦
      </div>

      <h3>
        Una sorpresa...
      </h3>

      <p>
        Para esta opción debes querer adelantar el tiempo y saber cual es mi artista favorito ANTES que lo fuera Bad Bunny ♡
      </p>

    </div>

  </div>
</button>

          </div>

          <div className="option-instruction">
            <span>✦</span>
            Toca una opción para descubrir su secreto
            <span>✦</span>
          </div>

          <p>
            Ingresa el siguiente código, princesa
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

export default SegundaPista