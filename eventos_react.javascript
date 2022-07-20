import '.App.css'
import Evento from './components/Evento'

function App() {
	return (
    <div className= "App">
   	 	<h1>Testando Eventos</h1>
		<Evento />
    </div>
	)
}

export default App

//Outra parte do código

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

