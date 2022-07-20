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

//Outra parte do código

function Form() {
	function cadastrarUsuario() {
    console.log("Cadastrou o usuário!")
	}

	return (
   <div>
     <h1>Meu cadastro:</h1>
     <form onSubmit={cadastrarUsuario}>
       <div>
         <input type="text" placeholder="Digite o seu nome" />
       </div>
       <div>
         <input type="submit" value="Cadastrar" />
       </div>
     </form>
   </div>    
	)
}
