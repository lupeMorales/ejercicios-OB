import React, { useState } from "react";
import { Contact } from "../models/contact.class";
import ContactComponent from "./contactComponent";
import CreateContact from "./createContact";

const ContactList = () => {
  const defaultContact1 = new Contact(
    "lupe",
    "morales",
    "lupemorales@email.com",
    false
  );
  const defaultContact2 = new Contact(
    "pepe",
    "nuñez",
    "pepenuñez@email.com",
    false
  );
  const defaultContact3 = new Contact(
    "tina",
    "nuñez",
    "tinanuñez@email.com",
    false
  );

  const [contact, setContact] = useState([
    defaultContact1,
    defaultContact2,
    defaultContact3,
  ]);

  function changeStatus(item) {
    console.log("change status");
    const index = contact.indexOf(item);
    const tempContact = [...contact];
    tempContact[index].connected = !tempContact[index].connected;
    setContact(tempContact);
  }
  function removeContact(item) {
    const index = contact.indexOf(item);
    const tempContact = [...contact];
    tempContact.splice(index, 1);
    setContact(tempContact);
  }
  function addNewContact(item) {
    const index = contact.indexOf(item);
    const tempContact = [...contact];
    tempContact.push(item);
    setContact(tempContact);
  }

  return (
    <div>
      {contact.map((item, index) => {
        return (
          <ContactComponent
            key={index}
            contact={item}
            status={changeStatus}
            remove={removeContact}
          />
        );
      })}
      <CreateContact add={addNewContact} />
    </div>
  );
};

export default ContactList;
