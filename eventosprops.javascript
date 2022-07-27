import Button from './evento/Button'

function Evento() {
	function meuEvento() {
    console.log("Ativando primeiro evento!")
	}

	function segundoEvento() {
	  console.log('Ativando o segundo evento!')
	}

	return (
    <div>
      <p>Clique para disparar um evento:</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </div>
	)
}

export default Evento 

function Button(props) {
	return <button onClick={props.event}>{props.text}</button>
}

export default Button


import '.App.css'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {
	return (
    <div className= "App">
   	 	<h1>Testando Eventos</h1>
   	 	<Evento/>
   	 	<Form />
    </div>
	)
}

export default App
