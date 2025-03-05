interface MostrarTurnosProps {
  turno: string;
}

const MostrarTurnos: React.FC<MostrarTurnosProps> = ({ turno }) => {
  return (
    <div className="text-white">
      <h3 style={{ fontFamily: "cursive" }}>
        Turno de: <span style={{ fontFamily: "sans-serif" }} className="fs-1">{turno}</span>
      </h3>
    </div>
  );
};

export default MostrarTurnos;
