import '.App.css'
import Evento from './components/Evento'

function App() {
	return (
    <div className= "App">
   	 	<h1>Testando Eventos</h1>
   	 	<Form />
    </div>
	)
}

export default App

//Próximo código é uma continuação

function Evento() {
	function meuEvento() {
    console.log("Opa, fui ativado")
	}

	return (
    <div>
      <p>Clique para disparar um evento:</p>
      <button onClick={meuEvento}>Ativar!</button>
    </div>
	)
}

export default Evento 

//Próximo código é uma continuação

import {useState} from 'react'

function Form() {
	function cadastrarUsuario(e) {
	  e.preventDefault()
	  console.log(name)
    console.log("Cadastrou o usuário!")
	}
	 const [name, setName] = useState()

	return (
   <div>
     <h1>Meu cadastro:</h1>
     <form onSubmit={cadastrarUsuario}>
       <div>
         <label htmlFor="name">Nome:</label>
         <input type="text" id="name" name="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)/>
       </div>
       <div>
         <label htmlFor="password">Senha:</label>
         <input type="password" id="password" name="password" placeholder="Digite a sua senha" />
       </div>
       <div>
         <input type="submit" value="Cadastrar" />
       </div>
     </form>
   </div>    
	)
}

