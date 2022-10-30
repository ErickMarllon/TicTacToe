import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from "./GlobalStyle";
import TicTacToe from "./TicTacToe";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <GlobalStyle />
    <TicTacToe />
  </React.StrictMode>
)
