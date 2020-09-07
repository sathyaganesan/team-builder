import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import MemberCard from './MemberCard';

function App() {

  const [form, setForm] = useState([
    {
      id: 1,
      name: "Sathya",
      email: "sathyaganesan.b2w@gmail.com",
      role: "UI Designer"
    }
  ]);

  const addNewForm = (formData) => {
    const newForm = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      role: formData.role
    }
    setForm([...form, newForm]);
  };

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Form formAttr = {addNewForm} />
      <MemberCard MemberCardattr = {form} />
    </div>
  );
}

export default App;
