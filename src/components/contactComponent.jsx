import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.class";
const ContactComponent = (props) => {
  const handleClickConnect = () => {
    props.status(props.contact);
  };

  const handleClickDelete = () => {
    props.remove(props.contact);
  };
  function showStatus() {
    if (props.contact.conected) {
      return <p>in line</p>;
    } else {
      return <p>disconnected</p>;
    }
  }
  return (
    <div>
      <h2>
        Name: {props.contact.name} {props.contact.surname}
      </h2>
      <h3>Email: {props.contact.mail}</h3>
      <h4>Status: {showStatus()}</h4>
      <button onClick={handleClickConnect}>connect</button>
      <button onClick={handleClickDelete}>delete</button>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
  remove: PropTypes.func.isRequired,
  status: PropTypes.func.isRequired,
};

export default ContactComponent;
