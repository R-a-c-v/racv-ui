import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './Rotas'
import { BrowserRouter } from 'react-router-dom'
import './styles/app.css'
import Rotas from './Rotas'

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Rotas />
  </BrowserRouter>
);