import { useOutletContext } from "react-router";
import Container from "../components/Container/Container";
import styles from "./resposta.module.css";
import IconeTipo from "../components/iconeTipo/IconeTipo";
import { useEffect } from "react";

const Resposta = () => {
  const { respostaEscolhida, tipoEscolhido, setTipoEscolhido } =
    useOutletContext();

  const ContaTipos = () => {
    const contador = {};
    respostaEscolhida.forEach((tipo) => {
      if (contador[tipo]) {
        contador[tipo] += 1;
      } else {
        contador[tipo] = 1;
      }
    });

    let maisEscolhido = "";
    let maiorContagem = 0;
    for (let tipo in contador) {
      if (contador[tipo] > maiorContagem) {
        maiorContagem = contador[tipo];
        maisEscolhido = tipo;
      }
    }
    return maisEscolhido;
  };

  useEffect(() => {
    let tipo = ContaTipos();
    setTipoEscolhido(tipo);
  }, [setTipoEscolhido]);

  let frase = "";

  switch (tipoEscolhido) {
    case "Vampiro":
      frase =
        "Você é um vampiro! Sua alma é sombria e quieta, prefere o silencio de seus pensamentos além de ser uma pessoa elegante e misteriosa";
      break;
    case "Lobisomem":
      frase =
        "Você é um Lobisomem! Sua natureza é livre e selvagem, pode ser impulsivo porém muito leal com os seus ";
      break;
    case "Fada":
      frase =
        "Você é uma fada! Possui uma alma gentil e carismatica, geralmente é rodeada de amigos e animais";
      break;
    case "Alien":
      frase =
        "Você é uma alienigena! Esta sempre no mundo da lua, geralemente foge dos proprios problemas, e adora experimentar novas sensaçoes";
      break;
      case 'Demonio':
        frase =
        'Você é um demonio! Sua alma é o proprio caos, adora ver o circo pegar fogo, é muito pragmatico e pode ser um tanto manipulador'
      break;
      default:
        frase = ''
  }

  return (
    <Container>
      <h1 className={styles.titulo}>{tipoEscolhido}</h1>
      <div>
        <p className={styles.frase}>{frase}</p>
        <IconeTipo />
      </div>
    </Container>
  );
};

export default Resposta;
