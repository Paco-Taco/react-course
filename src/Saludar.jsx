// Esta es otra forma de crear componentes en React, pero es poco común ya que usa un enfoque orientado a Objetos, por lo que su uso se ha visto opacado por la eficiencia de las funciones como medio de creación de componentes

import { Component } from "react";

export class Saludar extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}
