import {useNavigate } from "react-router";
import styles from "./menu.module.css";

const Menu = () => {
  const navegar = useNavigate();
  const iniciar = () => {
    navegar("/perguntas");
   
  };

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.titulo}>Qual ser sobrenatural você é?</h1>
      </div>
      <div className={styles.secao}>
        <p>Responda as perguntas para descobrir!</p>
        <button onClick={iniciar} className={styles.botao}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Menu;
