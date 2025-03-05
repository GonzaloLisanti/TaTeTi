import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { coloresDisponibles } from "../constants/constant";

const ParticlesBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // Extraemos los colores de la constante `coloresDisponibles`
  const particleColors = coloresDisponibles.map((colorObj) => colorObj.color);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#1a1a1a", // Fondo oscuro para que las partículas resalten
          },
        },
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: particleColors, // Usamos los colores de las constantes
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
          },
          move: {
            enable: true,
            speed: 3,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
