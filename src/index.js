import React from "react";
import ReactDom from 'react-dom/client'

// Crea un elemento root obteniendo el id del div del index
//const rootElement = document.getElementById('root')

// crear un elemento root desde la función createRoot de ReactDom hacia el div "root" del index
//ReactDom.createRoot(rootElement)

// U otra forma más eficiente es escribirlo todo junto sin crear variable rootElement, sólo root
const root = ReactDom.createRoot(document.getElementById('root'))

// Utilizamos la función render de la constante root para crear el "hola mundo"
root.render(<h1>Hello World!</h1>)
