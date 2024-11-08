import React from 'react';
import './App.css';
import Home from './pages/Home.js';
//import About from './About';
// para executar, colocar no terminal 'npm start'

// um componente React é uma função JavaScript que retorna um elemento HTML (JSX)
// o elemento HTML é o que será renderizado na tela
// o componente App é o componente principal da aplicação
// ele é renderizado no arquivo index.js

function App() {
  return (
    <div className="App">
      <Home />
      
    </div>
  );
}

export default App;
