import React, { useState, useEffect } from "react";
import { Navbar, Footer, Form } from "./components";
import "./App.css";
import { db } from "./database/People";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [id, setId] = useState("")
  const [personDB, setPersonDB] = useState(db);
  const [prefix, setPrefix] = useState("");

  return (
    <div className="App">
      <Navbar title="CRUD" />
      <Form
        name={name}
        setName={setName}
        surname={surname}
        setSurname={setSurname}
        db={personDB}
        setDB={setPersonDB}
        id={id}
        setId={setId}
        prefix={prefix}
        setPrefix={setPrefix}
      />
      <Footer />
    </div>
  );
}

export default App;
