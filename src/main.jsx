/* Importação das libs ESSENCIAIS (React ReactDOM) */
import React from 'react'
import ReactDOM from 'react-dom/client'
/* Importação de primeiro componente, arquivo em que carregamos os elementos da página (como se fosse um index/home)*/
import App from './App.jsx'
/* Inicialização dos recursos do React, manipulando a div#root existente no index.html */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
