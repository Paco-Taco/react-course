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

// Se pueden crear funciones anidadas dentro de las cuales podemos retornar el valor resultante de ejecutarlas
function Greeting() {
  function add(x, y) {
    return x + y;
  }

  return <h1>{add(30, 10)}</h1>;

  //   const user = {
  //     firstName: "Diego",
  //     lastName: "Rodriguez",
  //   };

  //   // return <h1>{ JSON.stringify(user) }</h1>

  //   return (
  //     <div>
  //       <h1>{user.firstName}</h1>
  //       <h3>{user.lastName}</h3>
  //     </div>
  //   );

  //   const married = true;

  // Establecemos una condicional en la que cambia la etiqueta a retornar dependiendo del valor de la constante

  // if (married) {
  //     return <h1>I'm married</h1>
  // } else {
  //     return <h1>I'm not married</h1>
  // }

  // Pero se puede hacer más eficiente con un ternario
  //   return <h1>{married ? "I'm married 😛" : "I'm not married 😒"}</h1>;

  // EL poner un div al inicio se debe a la regla de que debe haber un elemento padre
  //   return (
  //       <h1>{ married }</h1>
  //   );
}

// Utilizamos la función render de la constante root para crear el "hola mundo"

/*
NOTA: Para evitar la redundacia de div's, existen las etiquetas "Fragment", las cuales carecen de texto alguno dentro de ellas, pero sirven para cumplir la regla de react con respecto a los contenedores. Es muy común verla en proyectos grandes
*/
root.render(
  <>
    <Greeting />
    <Greeting />
    <Greeting />
  </>
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
