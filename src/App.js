import "./App.css";
import React, { useState } from "react";
import { contacts } from "./data/contacts";
import Table from "./components/Table";
import Filters from "./components/Filters";
import Search from "./components/Search";

function App() {
  const [contactsList, setContactsList] = useState(contacts);

  const ocisti = () => {
    setContactsList([]);
  }

  const resetiraj = () => {
    setContactsList(contacts);
  }

  const deleteUser = (userId) => {
    let niz = [];
    contactsList.forEach(el => {
      if (el.id !== userId) {
        niz.push(el);
      }
    });

    setContactsList(niz);
  }

  const categoryChange = (value) => {
    let niz = [];
    contacts.forEach(el => {
      if ((el.category === value) || (value === "")) {
        niz.push(el);
      }
    });

    setContactsList(niz);
  }

  const cityChange = (value) => {
    let niz = [];
    contacts.forEach(el => {
      if ((el.city === value) || (value === "")) {
        niz.push(el);
      }
    });

    setContactsList(niz);
  }

  const searchChange = (value) => {
    let niz = [];
    contacts.forEach(el => {
      const elFullName = el.name + " " + el.lastName;
      if (((elFullName.toLowerCase()).includes(value)) || (value === "")) {
        niz.push(el);
      }
    });

    setContactsList(niz);
  }

  return (
    <>
      <Search searchChange={searchChange} />
      <Filters categoryChange={categoryChange} cityChange={cityChange}/>
      <Table contacts={contactsList} deleteUser={deleteUser}/>
      <button className="botun" onClick={ocisti}>Očisti tablicu</button>
      <button className="botun" onClick={resetiraj}>Resetiraj tablicu</button>
    </>
  )
}

export default App;
