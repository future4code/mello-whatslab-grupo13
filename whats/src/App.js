import React from 'react';
import logo from './logo.svg';
import './App.css';
import NomeUsuario from './components/NomeUsuario/NomeUsuario';
import Mensagem from './components/Mensagem/Mensagem';
import Enviar from './components/Enviar/Enviar';
import Conversa from './components/Conversa/Conversa';

function App() {
  return (
    <div>
      <Conversa />
      <NomeUsuario />
      <Mensagem />
      <Enviar />
    </div>
  );
}

export default App;
