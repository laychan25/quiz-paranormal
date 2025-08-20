import { useOutletContext } from "react-router";
import styles from "./iconetipo.module.css";
import VampiroImg from "./assets/vampiro.png";
import LobisomemImg from './assets/lobisomen.png';
import FadaImg from './assets/fada.png';
import DemonioImg from './assets/demonioQuiz.png';
import AlienImg from './assets/alien.png';

const imagensTipo = {
  Vampiro: VampiroImg,
  Lobisomem : LobisomemImg,
  Fada: FadaImg,
  Demonio: DemonioImg,
  Alien: AlienImg
};

const IconeTipo = () => {
  const { tipoEscolhido } = useOutletContext();
  let imagem = imagensTipo[tipoEscolhido];
  
  return (
    <div className={styles.container}>
      <div
        className={styles.icone}
        style={{
          backgroundImage: `url(${imagem})`,
           
        }}
      ></div>
    </div>
  );
};

export default IconeTipo;
