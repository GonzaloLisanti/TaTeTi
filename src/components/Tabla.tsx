import { useState, useEffect } from "react";
import Cuadrado from "./Cuadrado";
import {
  Turnos,
  JugadasGanadoras,
  coloresDisponibles,
} from "../constants/constant";
import MostrarTurnos from "./MostrarTurnos";
import MostrarGanador from "./MostrarGanador";
import SelectorColor from "./SelectorColor";
import MostrarEmpate from "./MostrarEmpate";

const Tabla = () => {
  const [jugadas, setJugadas] = useState<
    Array<{ jugador: string; color: string } | null>
  >(Array(9).fill(null));
  const [turno, setTurno] = useState(Turnos.X);
  const [ganador, setGanador] = useState<string | null>(null);
  const [mostrarGanador, setMostrarGanador] = useState(false);
  const [colorX, setColorX] = useState(coloresDisponibles[0].color);
  const [colorO, setColorO] = useState(coloresDisponibles[1].color);
  const [mostrarReinicio, setMostrarReinicio] = useState(false);
  const [mostrarEmpate, setMostrarEmpate] = useState(false);

  useEffect(() => {
    if (!mostrarGanador) {
      setJugadas(Array(9).fill(null));
      setTurno(Turnos.X);
      setGanador(null);
      setMostrarReinicio(false);
    }
  }, [mostrarGanador]);

  useEffect(() => {
    setJugadas((prevJugadas) =>
      prevJugadas.map((jugada) =>
        jugada
          ? {
              jugador: jugada.jugador,
              color:
                jugada.jugador === "X"
                  ? colorX
                  : jugada.jugador === "O"
                  ? colorO
                  : jugada.color,
            }
          : null
      )
    );
  }, [colorX, colorO]);

  const checkGanador = (jugadasToCheck: Array<string | null>) => {
    for (const combo of JugadasGanadoras) {
      const [a, b, c] = combo;
      if (
        jugadasToCheck[a] &&
        jugadasToCheck[a] === jugadasToCheck[b] &&
        jugadasToCheck[a] === jugadasToCheck[c]
      ) {
        return jugadasToCheck[a];
      }
    }
  };

  const updateJugadas = (index: number) => {
    if (jugadas[index] !== null) return;
    const nuevasJugadas = [...jugadas];
    nuevasJugadas[index] =
      turno === "X"
        ? { jugador: Turnos.X, color: colorX }
        : { jugador: Turnos.O, color: colorO };
    setJugadas(nuevasJugadas);
    setMostrarReinicio(true);
    setTurno(turno === "X" ? "O" : "X");

    const newGanador = checkGanador(
      nuevasJugadas.map((j) => j?.jugador || null)
    );
    if (newGanador) {
      setGanador(newGanador);
      setMostrarGanador(true);
    } else if (nuevasJugadas.every((j) => j !== null)) {
      setMostrarEmpate(true);
    }
  };

  const handleReiniciar = () => {
    if (!mostrarGanador) {
      setJugadas(Array(9).fill(null));
      setTurno(Turnos.X);
      setGanador(null);
      setMostrarReinicio(false);
    }
  };

  return (
    <div className="container d-flex flex-column align-items-center">
      {mostrarGanador && (
        <MostrarGanador
          ganador={ganador!}
          onClose={() => setMostrarGanador(false)}
        />
      )}
      {mostrarEmpate && (
        <MostrarEmpate
          show={mostrarEmpate}
          onClose={() => setMostrarEmpate(false)}
          onReiniciar={() => {
            setMostrarEmpate(false);
            handleReiniciar();
          }}
        />
      )}

      {/* Tablero */}
      <div className="row row-cols-3 g-2 mx-auto" style={{ maxWidth: "300px" }}>
        {jugadas.map((cuadrado, index) => (
          <div className="col" key={index}>
            <Cuadrado
              index={index}
              updateJugadas={updateJugadas}
              color={cuadrado?.color || "white"} // Asigna el color al cuadrado según la jugada
            >
              {cuadrado?.jugador}
            </Cuadrado>
          </div>
        ))}
      </div>

      <div className="mt-2">
        <MostrarTurnos turno={turno} />
      </div>
      <SelectorColor
        colorX={colorX}
        colorO={colorO}
        setColorX={setColorX}
        setColorO={setColorO}
      />
      <div>
        {mostrarReinicio && (
          <button className="btn btn-danger mt-3" onClick={handleReiniciar}>
            Reiniciar Juego
          </button>
        )}
      </div>
    </div>
  );
};

export default Tabla;
