import React, { useEffect, useState } from "react";

const ClockTipoFuncion = () => {
  const [initialState, setInitialState] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Lupe",
    apellidos: "Morales Carmona",
  });
  function tick() {
    setInitialState((initialState) => {
      let edad = initialState.edad + 1;
      return {
        ...initialState,
        fecha: new Date(),
        edad,
      };
    });
  }
  useEffect(() => {
    //justo al acabar el montaje del componente, justo antes del renderizado(aqui se hacen las peticiones)
    let timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  });
  return (
    <div>
      <h2>
        Hora Actual:
        {initialState.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {initialState.nombre} {initialState.apellidos}
      </h3>
      <h1>Edad: {initialState.edad}</h1>
    </div>
  );
};

export default ClockTipoFuncion;
