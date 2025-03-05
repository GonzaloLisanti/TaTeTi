import React from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
interface MostrarGanadorProps {
  ganador: string;
  onClose: () => void;
  color: string;
}

const MostrarGanador: React.FC<MostrarGanadorProps> = ({
  ganador,
  onClose,
  color,
}) => {
  const { width, height } = useWindowSize();

  return (
    <div className="modal fade show d-block" tabIndex={-1} role="dialog" >
      <Confetti width={width} height={height} numberOfPieces={200} />
      <div className="modal-dialog modal-dialog-centered" >
        <div className="modal-content" style={{backgroundColor: color}}>
          <div className="modal-header justify-content-center">
            <h5 style={{ fontFamily: "Pacifico" }} className="modal-title fs-4">
              🎉 ¡Tenemos un ganador! 🎉
            </h5>
          </div>
          <div className="modal-body text-center">
            <h2 style={{ fontFamily: "Pacifico" }} className="display-5">
              Ganador: {ganador}
            </h2>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button
              className="btn border px-5 py-2 fs-4 shadow"
              onClick={onClose}
            >
              Empezar de nuevo  
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostrarGanador;
