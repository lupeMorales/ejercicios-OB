import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
import { useState } from "react";

const ComponentB = ({ contact }) => {
  const [conected, setConected] = useState(contact.conected);

  const handleClick = (ev) => {
    ev.preventDefault();
    setConected(!conected);
  };
  return (
    <div>
      <h2>
        Nombre: {contact.name} {contact.surname}
      </h2>
      <h3>Email: {contact.mail}</h3>
      <h4>Contacto {conected ? "en línea" : "No Disponible"}</h4>
      <button onClick={handleClick}>conectado</button>
    </div>
  );
};
ComponentB.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};
export default ComponentB;
