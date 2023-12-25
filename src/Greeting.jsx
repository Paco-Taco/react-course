/* Es importante que los componentes de JSX empiecen con mayúsculas para poder diferenciarlos de HTML o de otros elementos dentro del código */

/* Las props las recibiremos en la notación de JSX como argumentos dentro de la función del componente que deseemos*/

// Para establecer un valor por defecto se le pone " prop = "valor"  dentro de los argumentos"
export function Greeting({ title, name = "User" }) {
  console.log(title, name);
  return (
    <h1>
      {title} says {name}
    </h1>
  );
}

// Poniendo export antes de la función, exportarás únicamente esa función y la tendrás que especificar en el archivo destino
export function UserCard({ name, amount, married, address, greet }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "married" : "single"}</p>
      <ul>
        <li>{address.city}</li>
        <li>{address.street}</li>
      </ul>
    </div>
  );
}
