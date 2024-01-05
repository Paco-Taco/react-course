import { VscGlobe } from "react-icons/vsc";

// Creamos un componente Posts con una arrow function, la cual retornará un botón con una propiedad onClick
export const Posts = () => {
  return (
    <button
      onClick={() => {
        // EL onClick, mediante otra arrow buscará dentro del backend que le pasemos como argumento, en este caso, la url de ejemplo
        fetch("https://jsonplaceholder.typicode.com/posts")
          // Para después, convertir la respuesta en json
          .then((response) => response.json())
          // Mostrarla en la consola
          .then((data) => console.log(data))
          // Y, en caso de error, notificarlo a través de la misma
          .catch((error) => console.error(error));
      }}
    >
      <VscGlobe />
      Fetch data
    </button>
  );
};
