import Container from './components/Container/Container';
import styles from './app.module.css'
import { Outlet } from 'react-router';
import { useState } from 'react';

function App() {


  const [respostaEscolhida , setRespostaEscolhida]= useState([]);
   const[ tipoEscolhido, setTipoEscolhido ]= useState('')
  return (
    <div className={styles.app}>
     <Container>
       <Outlet context={{respostaEscolhida, setRespostaEscolhida, tipoEscolhido, setTipoEscolhido}} />
     </Container>
    </div>
  );
}

export default App;
