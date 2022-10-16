import React, { useRef } from "react";
import { Contact } from "../models/contact.class";

const CreateContact = ({ add }) => {
  const refName = useRef("");
  const refSurname = useRef("");
  const refEmail = useRef("");

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      refName.current.value,
      refSurname.current.value,
      refEmail.current.value,
      false
    );
    add(newContact);
  }
  return (
    <div>
      <form onSubmit={addContact}>
        <input ref={refName} type="text" placeholder="Name"></input>
        <input ref={refSurname} type="text" placeholder="Surname"></input>
        <input
          ref={refEmail}
          type="text"
          placeholder="exemple@mail.com"
        ></input>{" "}
        <button type="submit">new contact</button>
      </form>
    </div>
  );
};

export default CreateContact;
