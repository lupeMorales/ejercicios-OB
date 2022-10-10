import React, { Component } from "react";
/* import "../../styles/clock.scss"; */

class Clock extends Component {
  constructor(props) {
    //instancia el componente
    super(props);
    // Estado privado del component
    this.state = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: "Lupe",
      apellidos: "Morales Carmona",
    };
  }
  componentDidMount() {
    //justo al acabar el montaje del componente, justo antes del renderizado(aqui se hacen las peticiones)
    //
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    //justo antes de desaparecer
    clearInterval(this.timerID);
  }
  render() {
    return (
      <div>
        <h2>
          Hora Actual:
          {this.state.fecha.toLocaleTimeString()}
        </h2>
        <h3>
          {this.state.nombre} {this.state.apellidos}
        </h3>
        <h1>Edad: {this.state.edad}</h1>
      </div>
    );
  }
  tick() {
    this.setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }
}
export default Clock;
