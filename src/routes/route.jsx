import { createBrowserRouter } from "react-router";
import MenuInicial from "./Menu";
import Perguntas from "./perguntas";
import App from "../App";
import Resposta from "./Resposta";

const Rota = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    children:[
        {
            path: "",
            element: <MenuInicial/>
        },
        {
            path:'perguntas',
            element: <Perguntas/>,
        
        },
         {
            path:'resultado',
            element: <Resposta/>
         }
    ]
    
  },
]);

export default Rota;
