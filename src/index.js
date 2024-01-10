import React from "react";
import ReactDom from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

// Ejemplo de import desde un archivo que usa export default
import Product, { Navbar } from "./Product";

// Crea un elemento root obteniendo el id del div del index
//const rootElement = document.getElementById('root')

// crear un elemento root desde la función createRoot de ReactDom hacia el div "root" del index
//ReactDom.createRoot(rootElement)

// U otra forma más eficiente es escribirlo todo junto sin crear variable rootElement, sólo root
const root = ReactDom.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Diego",
    image: "https://robohash.org/diego",
  },
  {
    id: 2,
    name: "Maggie",
    image: "https://robohash.org/maggie",
  },
  {
    id: 3,
    name: "Paco",
    image: "https://robohash.org/paco",
  },
];
// Creamos esta funcion para mejorar el manejo de cambios dentro del input
// const handleChange = (e) => {
//   console.log(e.target.value)
// }

// Crear nuestro primer componente
// Los componentes son básicamente funciones que retornan código html, cosa que en JS vanilla no es posible.

// Se pueden crear funciones anidadas dentro de las cuales podemos retornar el valor resultante de ejecutarlas
// function Greeting() {
//   function add(x, y) {
//     return x + y;
//   }

//   return <h1>{add(30, 10)}</h1>;

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
// }

// Utilizamos la función render de la constante root para crear el "hola mundo"

/*
NOTA: Para evitar la redundacia de div's, existen las etiquetas "Fragment", las cuales carecen de texto alguno dentro de ellas, pero sirven para cumplir la regla de react con respecto a los contenedores. Es muy común verla en proyectos grandes
*/

/*
Podemos utilizar los "props" para enviar datos y modificar componentes de nuestro proyecto, asignándole el nombre y la propiedad como si fuera una etiqueta común de HTML 
*/
root.render(
  <>
    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>Hola {user.name}</h1>
          <img src={user.image} alt="Robot" />
        </div>
      );
    })}

    {/* Se manda a llamar al componente Posts */}
    {/* <Posts /> */}

    {/* Se pone un booleano entre llaves por la sintaxis de JS */}
    {/* <TaskCard ready={true} />
    <Saludar />
    <Button text="saludar" /> */}

    {/* Creamos un formulario que liberará un msg en la consola representando el envío de datos a un server */}
    {/* <form onSubmit={(e) => {
      e.preventDefault()
      console.log("Enviado")
    }}>
      <h1>Registro de usuario</h1>
      <button>Send</button>
    </form> */}

    {/* Ejemplo de la funcion onDoubleClick dentro del input */}
    {/* <input id="hola" onDoubleClick={() => {
      console.log("Dos veces")
    }}></input> */}

    {/* Llama a la función handleChange cada vez que se escriba algo */}
    {/* <input id="hola" onChange={handleChange}></input> */}

    {/* Obtiene lo que se escribe cada vez que se escribe algo */}
    {/* <input id="hola" onChange={(e) => {
      console.log(e.target.value)
    }}></input> */}

    {/* Lo mismo que arriba solo que se añaden puntitos supensivos */}
    {/* <input id="hola" onChange={function(e) {
      console.log(e.target.value + "...")
    }}></input> */}
  </>
);

/* <Greeting x="bye" />
    <Greeting y={30} />
    <Greeting z={true} />
    <Greeting a={[1, 2, 3]}/> */

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
