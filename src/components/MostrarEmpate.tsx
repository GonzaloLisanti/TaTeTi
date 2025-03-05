import React from "react";

interface MostrarEmpateProps {
  show: boolean;
  onClose: () => void;
  onReiniciar: () => void;
}

const MostrarEmpate: React.FC<MostrarEmpateProps> = ({
  show,
  onClose,
  onReiniciar,
}) => {
  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none" }}
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content" style={{backgroundColor: "#f6f6f6"}}>
          <div className="modal-header justify-content-center">
            <h5 style={{ fontFamily: "Pacifico" }} className="modal-title fs-4">
              🎭 ¡Es un empate! 🎭
            </h5>
          </div>
          <div className="modal-body text-center">
            <h2 style={{ fontFamily: "Pacifico"}} className="fs-1">
              No hay un ganador.
            </h2>
            <p style={{ fontFamily: "Pacifico" }} className="fs-5">
              ¿Quieres reiniciar el juego?
            </p>
          </div>
          <div className="modal-footer d-flex justify-content-center">
            <button className="btn border me-5 fs-5 shadow" onClick={onClose}>
              Cerrar
            </button>
            <button
              className="btn btn-danger fs-5 shadow"
              onClick={onReiniciar}
            >
              Reiniciar Juego
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostrarEmpate;
