import React from "react";
import ReactDom from "react-dom/client";

// Crea un elemento root obteniendo el id del div del index
//const rootElement = document.getElementById('root')

// crear un elemento root desde la función createRoot de ReactDom hacia el div "root" del index
//ReactDom.createRoot(rootElement)

// U otra forma más eficiente es escribirlo todo junto sin crear variable rootElement, sólo root
const root = ReactDom.createRoot(document.getElementById("root"));

// Crear nuestro primer componente
// Los componentes son básicamente funciones que retornan código html, cosa que en JS vanilla no es posible.
function Greeting() {
    // EL poner un div al inicio se debe a la regla de que debe haber un elemento padre
  return (
    <div>
      <h1>Hello world</h1>
      <p>lorem 123</p>
    </div>
  );
}

// Utilizamos la función render de la constante root para crear el "hola mundo"
root.render(
  <div>
    <Greeting />
    <Greeting />
    <Greeting />
  </div>
);

/* Hay diferentes formas de usar componentes dentro de la función render,
puede ser entre llaves y poniendo adentro la función { function() } o, para un mejor entendimiento, entre etiquetas comúnes de HTML <function></function>, y no es necesario que uses dos etiquetas, puedes cerrarlas ahí mismo "<function/>, son conocidas como "Self-closing tags"
*/

/* 
root.render(
    <div>
    { Greeting() }
    { Greeting() }
    { Greeting() }
    </div> )
    
*/
