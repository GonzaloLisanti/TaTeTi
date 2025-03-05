import { useState, useEffect } from "react";
import { coloresDisponibles } from "../constants/constant";

// Función para seleccionar un color aleatorio de la lista de colores
const obtenerColorAleatorio = () => {
  const indiceAleatorio = Math.floor(Math.random() * coloresDisponibles.length);
  return coloresDisponibles[indiceAleatorio].color;
};

const Titulo = () => {
  // Estado para los colores de las sílabas
  const [colores, setColores] = useState([
    obtenerColorAleatorio(), // color para "Ta"
    obtenerColorAleatorio(), // color para "Te"
    obtenerColorAleatorio(), // color para "Ti"
  ]);

  // Cambiar los colores cada 1 segundo (1000ms)
  useEffect(() => {
    const intervalo = setInterval(() => {
      setColores([
        obtenerColorAleatorio(),
        obtenerColorAleatorio(),
        obtenerColorAleatorio(),
      ]);
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h1 style={{ fontFamily: "Pacifico" }} className="display-3 text-white">
        <span style={{ color: colores[0] }}>Ta</span>
        <span>-</span>
        <span style={{ color: colores[1] }}>Te</span>
        <span>-</span>
        <span style={{ color: colores[2] }}>Ti</span>
      </h1>
    </div>
  );
};

export default Titulo;
