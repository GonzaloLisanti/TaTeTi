import React from "react";
import Select from "react-select";
import { coloresDisponibles } from "../constants/constant";

interface SelectorColorProps {
  colorX: string;
  colorO: string;
  setColorX: (color: string) => void;
  setColorO: (color: string) => void;
}

const SelectorColor: React.FC<SelectorColorProps> = ({
  colorX,
  colorO,
  setColorX,
  setColorO,
}) => {
  // Opciones de color base
  const colorOptions = coloresDisponibles.map((color) => ({
    value: color.color,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <span
          style={{
            display: "inline-block",
            width: "20px",
            height: "20px",
            marginRight: "10px",
            backgroundColor: color.color,
          }}
        ></span>
        {color.name}
      </div>
    ),
  }));

  // Filtrar opciones para X (excluir el color seleccionado en O)
  const filteredOptionsX = colorOptions.filter(
    (option) => option.value !== colorO
  );

  // Filtrar opciones para O (excluir el color seleccionado en X)
  const filteredOptionsO = colorOptions.filter(
    (option) => option.value !== colorX
  );

  return (
    <div className="d-flex flex-column flex-md-row justify-content-center align-items-center mb-3 w-100">
      {/* Contenedor para X */}
      <div className="d-flex align-items-center mb-2 mb-md-0 me-md-3">
        {/* Etiqueta para X */}
        <div className="me-2 fs-2 text-white">X</div>
        {/* Selector de color para X */}
        <Select
          id="selectX"
          options={filteredOptionsX} // Usar opciones filtradas
          value={colorOptions.find((option) => option.value === colorX)}
          onChange={(selected) => setColorX(selected?.value || "")}
          className="w-100 w-md-auto" // Ancho completo en móvil, automático en pantallas grandes
          classNamePrefix="react-select"
          isSearchable={false}
          styles={{
            container: (provided) => ({
              ...provided,
              minWidth: "180px", // Ancho mínimo para evitar que se vea demasiado pequeño
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              alignItems: "center",
              maxWidth: "90%", // Limitar el ancho del texto seleccionado
              overflow: "hidden",
              textOverflow: "ellipsis",
            }),
            option: (provided) => ({
              ...provided,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap", // Evitar el salto de línea
            }),
          }}
        />
      </div>

      {/* Contenedor para O */}
      <div className="d-flex align-items-center">
        {/* Etiqueta para O */}
        <div className="me-2 fs-2 text-white">O</div>
        {/* Selector de color para O */}
        <Select
          id="selectO"
          options={filteredOptionsO} // Usar opciones filtradas
          value={colorOptions.find((option) => option.value === colorO)}
          onChange={(selected) => setColorO(selected?.value || "")}
          className="w-100 w-md-auto" // Ancho completo en móvil, automático en pantallas grandes
          classNamePrefix="react-select"
          isSearchable={false}
          styles={{
            container: (provided) => ({
              ...provided,
              minWidth: "180px", // Ancho mínimo para evitar que se vea demasiado pequeño
            }),
            singleValue: (provided) => ({
              ...provided,
              display: "flex",
              alignItems: "center",
              maxWidth: "90%", // Limitar el ancho del texto seleccionado
              overflow: "hidden",
              textOverflow: "ellipsis",
            }),
            option: (provided) => ({
              ...provided,
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap", // Evitar el salto de línea
            }),
          }}
        />
      </div>
    </div>
  );
};

export default SelectorColor;