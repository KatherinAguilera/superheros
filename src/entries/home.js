import React from 'react';
// redenderizar en el navegador
import ReactDOM from 'react-dom';
// Importamos dependencias de React
// import { hydrate } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';

// import App from '../pages/containers/app'
import HomePage from '../pages/containers/homePage';
import data from '../data.json';

const app = document.getElementById('app');
// Referenciamos un elemento con ID app
ReactDOM.render(<HomePage data={data} />, app);


// hydrate(
//   <BrowserRouter
//   >
//     <App />
//   </BrowserRouter>
//   , app);