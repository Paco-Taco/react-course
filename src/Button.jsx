// El primer paso será importar mediante npm el módulo de PropTypes (comando en google)
// Después importamos como lo vemos abajo v
import PropTypes from 'prop-types'

// Recordemos que las props se importan entre llaves dentro de los argumentos.
export function Button({text, name}) {
    console.log(text)
    // Validación de que haya texto
    if(!text){
        console.error("Text is required")        
    }

    // Utilizamos la función de react onClick para imprimir en consola
    return <button onClick={function() {
        console.log("Hello world")
    }}>
        {text} - {name}
    </button>
}

Button.propTypes = {
    // Validación de texto usando propTypes
    text: PropTypes.string.isRequired
}

Button.defaultProps = {
    // Establecemos valores por defecto usando propTypes
    // Sintaxis de objetos
    name: 'Some user',
    text: 'Some text'
}