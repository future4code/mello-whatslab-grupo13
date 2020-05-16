import React from 'react';
import logo from './logo.svg';
import './App.css';
//import NomeUsuario from './components/NomeUsuario/NomeUsuario';
//import Mensagem from './components/Mensagem/Mensagem';
//import Enviar from './components/Enviar/Enviar';
//import Conversa from './components/Conversa/Conversa';
import styled from 'styled-components';

const Container = styled.div`
background-image: url(https://cdn.pixabay.com/photo/2017/08/24/03/41/milky-way-2675322_1280.jpg);
display: flex;
justify-content:center;

`

const Principal = styled.div`
  display: flex;
  /* justify-content: ce; */
  border: solid 1px black;
  height: 100vh;
  width: 500px;
  flex-direction: column;
  justify-content: flex-end;
  background-color: rgb(255,255,255,0.7);
   
`

const Elementos = styled.div`
  display: flex;
  justify-content: center;
`

const Mensagens = styled.div`
  font-size: small;
  background-color: rgb(255,255,255);
  margin-bottom: 20px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 7px;
  padding: 7px;
`

const InputUsuario = styled.input`
   
    padding: 10px;
    border-radius: 8px;
    border: 1px solid rgb(0,0,0,0.6);
`

const InputMensagem = styled.input`
    width: 90%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid rgb(0,0,0,0.6);
`

const Formulario = styled.form`
display: inline;

`

class App extends React.Component {
 state = {
   whats: [
     {
       nome: 'Usuário',
       mensagem: 'Olá'
     }
   ],

   valorInputUsuario: "",
   valorInputMensagem:""
 };

 adicionarMensagem = () => {

  const novoWhats = {
    nome: this.state.valorInputUsuario,
    mensagem: this.state.valorInputMensagem
  };

  const novosWhats = [...this.state.whats, novoWhats];

  this.setState({ 
    whats: novosWhats, 
   valorInputUsuario:"", 
   valorInputMensagem:""
  });
 
};



 onChangeInputUsuario = event => {
   this.setState({ valorInputUsuario: event.target.value})
 };

 onChangeInputMensagem = event => {
   this.setState({ valorInputMensagem: event.target.value})
 };


  render() {
    const listaDeWhats = this.state.whats.map(item => {

      return (
      <div className={'app-container'}>       
          <strong>{item.nome}:</strong> {item.mensagem}.
      
      </div>

     );
    });

    return (
    
    <Container>
      <Principal>
        <Mensagens>
          {listaDeWhats}
        </Mensagens>
        <Formulario>
        <Elementos>

        

        <InputUsuario
         value={this.state.valorInputUsuario}
         onChange={this.onChangeInputUsuario}
         placeholder={"Usuário"}
         />

         <InputMensagem
         value={this.state.valorInputMensagem}
         onChange={this.onChangeInputMensagem}
         placeholder={"Mensagem"}
         />

         <button
         onClick={this.adicionarMensagem}>Enviar
         </button>
         
        </Elementos>
        </Formulario>
      </Principal>
    </Container> 
    );
  }
}
  
    

export default App;
