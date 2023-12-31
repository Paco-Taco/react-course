// Importamos desde el archivo css que creamos, aunque no apaarezca autocompletado
import "./task.css";

// Recordemos que los props con nombre se declaran entre llaves por la sintaxis de JSX
export function TaskCard({ ready }) {
  // const cardStyles =  {background: "#202020", color: "#ffff", padding: "20px" }

  // const titleStyle = {fontWeight: 'lighter'}

  // <div style={cardStyles}>
  //   <h1 style={titleStyle} >Card title</h1>
  //   <p>Tarea realizada</p>
  // </div>

  return (

    // Se crean clases dentro de los valores a retornarse para identificarlos dentro del archivo CSS
    <div className="card">
      <h1>Card title</h1>

      {/* Se crea un ternario entre llaves por la sintaxis antes mencionada en la que si el prop recibido es true el bg es verde, pero si es false el bg será rojo renombrando la clase */}
      <span className={ready ? "bg-green" : "bg-red"} >
        {/* El texto cambiará dependiendo del resutlado del ternario */}
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </span>
    </div>
  );
}
