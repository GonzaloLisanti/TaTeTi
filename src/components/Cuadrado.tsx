import React from "react";

interface CuadradoProps {
  children: React.ReactNode;
  updateJugadas: (index: number) => void;
  index: number;
  color: string; // Recibe el color como prop
}

const Cuadrado: React.FC<CuadradoProps> = ({
  children,
  updateJugadas,
  index,
  color,
}) => {
  return (
    <div
      className="btn d-flex align-items-center justify-content-center w-100 p-0"
      style={{
        aspectRatio: "1/1",
        minWidth: "60px",
        minHeight: "60px",
        fontSize: "40px",
        backgroundColor: color, // Aplica el color al fondo del cuadrado
        color: "white", // Cambia el color de las letras a blanco
        boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.47)", // Sombra blanca
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Sombra en el texto
        borderColor: "white"
      }}
      onClick={() => updateJugadas(index)}
    >
      {children}
    </div>
  );
};

export default Cuadrado;
