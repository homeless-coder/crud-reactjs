import React from "react";
import { Navbar, Footer, Form } from "./components";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar title="CRUD" />
      <Form />
      <Footer />
    </div>
  );
}

export default App;