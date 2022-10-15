export class Contact {
  name = "";
  surname = "";
  mail = "";
  conected = false;

  constructor(name, surname, mail, conected) {
    this.name = name;
    this.surname = surname;
    this.mail = mail;
    this.conected = conected;
  }
}
