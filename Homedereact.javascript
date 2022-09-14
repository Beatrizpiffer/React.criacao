import styles from './Home.module.css'
import savings from '../../img/savings.svg'

function Home() {
	return(
	  <section className={styles.home_container}>
         <h1>Bem vindo ao <span>Costs</span></h1>
         <p>Comece a gerenciar os seus projetos agora mesmo!</p>
         <a href="/">Criar Projeto</a>
         <img scr={savings} alt="Costs"/>
	  </section>
	)
}

export default Home


 /* Css do React*/

.home_container {
	width: 100%;
	display: flex;
	flex-direction: column;
	alingn-items: center;
	justify-content: center;
	padding: 4cm;
}

.home_container h1 {
	font-size: 2.5em;
	margin-bottom: .5em;
}

.home_container h1 span {
	color: #Ffbb33;
	padding: 0 .2em;
	background-color: #222;
}

.home_container p {
	margin-bottom: 1.5em;
	color: #7b7b7b;
}

.home_container img{
	width: 350px;
	margin: 2em 0;
}
