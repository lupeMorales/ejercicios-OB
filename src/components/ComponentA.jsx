import React from "react";
import { Contact } from "../models/contact.class";
import ComponentB from "./ComponentB";

const ComponentA = () => {
  const defaultContact = new Contact("name", "surname", "mail@mail.com", false);
  return (
    <div>
      <ComponentB contact={defaultContact} />
    </div>
  );
};

export default ComponentA;
