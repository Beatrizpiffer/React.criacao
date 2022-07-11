import './App.css'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'

function App() {
    const nome = 'Maria'

    return (
        <div class="App">
            <h1>Testando CSS</h1>
            <SayMyName nome= "Matheus" />
            <SayMyName nome= "Pedro" />
            <SayMyName nome={nome} />
            <Pessoa
                nome="Rodrigo"
                idade="28"
                profissao="Programador"
                foto="https://via.placeholder.com/150"
            />
        </div>
    )
}
export default App


body {
    padding: 50px;
    background-color: aliceblue;
}
h1{
    color:black;
}


p{
    background-color: #999;
    padding: 10px;
}
