import styles from "./pergunta.module.css";
import { useState } from "react";
import Container from "../components/Container/Container";
import perguntas from "../pergunta";
import { useNavigate, useOutletContext } from "react-router";

const Perguntas = () => {
  const [ ,setPergunta] = useState([perguntas]);
  const [contador , setContador]= useState(0);
  const {respostaEscolhida , setRespostaEscolhida} = useOutletContext()


  const navegar = useNavigate()
  const mudaPg=()=>{
    navegar('/resultado')
  }

 let perguntaAtual = perguntas[contador] || {opcoes: []}

  const mudaPergunta = (index) => {
    if (contador < perguntas.length) {
      setPergunta(perguntas[contador]);
      let tipo = perguntas[contador].opcoes[index].tipo
      setRespostaEscolhida((prev=>[...prev , tipo]))
      setContador(contador + 1)
    }
    return respostaEscolhida
  };
  

  return (
    <Container>
        <h2 className={styles.titulo}>{perguntaAtual.texto}</h2>
        <div className={styles.containerBotao}>
         {perguntaAtual?.opcoes.map((opcao, index)=> <button className={styles.botaoPergunta} onClick={()=>mudaPergunta(index)} key={index}>{opcao.texto}</button>)}
         </div>
        {contador >= perguntas.length ? <button className={styles.botaoFinalizar} onClick={mudaPg}>Finalizar</button>: ''}
      
    </Container>
  );
};

export default Perguntas;
