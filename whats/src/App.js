import React from 'react';
import logo from './logo.svg';
import './App.css';
import NomeUsuario from './components/NomeUsuario/NomeUsuario';
import Mensagem from './components/Mensagem/Mensagem';
import Enviar from './components/Enviar/Enviar';
import Conversa from './components/Conversa/Conversa';
import styled from 'styled-components';

const Principal = styled.div`
  display: flex;
  /* justify-content: ce; */
  border: solid 1px black;
  height: 900px;
  width: 500px;
  flex-direction: column-reverse;
  /* justify-content: space-around; */
`

const Elementos = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <Principal>
      <div>
        <Conversa />
        <Elementos>
          <NomeUsuario />
          <Mensagem />
          <Enviar />
        </Elementos>
      </div>
    </Principal>
  );
}

export default App;
