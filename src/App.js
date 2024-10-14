import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

function MyButton() {
  return <Button variant="primary">Cliquer ici</Button>;
}

import axios from 'axios';

useEffect(() => {
  axios.get('https://api.github.com/users/github-john-doe')
    .then(response => {
      // Traiter la réponse
    })
    .catch(error => {
      // Gérer les erreurs
    });
}, []);
export default App;
