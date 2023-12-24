/* Es importante que los componentes de JSX empiecen con mayúsculas para poder diferenciarlos de HTML o de otros elementos dentro del código */
export function Greeting() {

  return <h1>Component</h1>;
}

// Poniendo export antes de la función, exportarás únicamente esa función y la tendrás que especificar en el archivo destino
export function UserCard() {
    return <h1>User card</h1>
}
