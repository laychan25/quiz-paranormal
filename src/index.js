import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider } from 'react-router';
import Rota from './routes/route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
 <RouterProvider router={Rota}>
   <React.StrictMode>
    <App />
  </React.StrictMode>
 </RouterProvider>
);

