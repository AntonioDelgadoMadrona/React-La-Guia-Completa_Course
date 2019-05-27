import React, { Component } from "react";
import Header from "./Header";
import Formulario from "./Formulario";
import Resumen from "./Resumen";
import Resultado from "./Resultado";
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from "../helper";

class App extends Component {

  state = {
    resultado: "",
    datos: {}
  };

  cotizarSeguro = auto => {
    const { marca, plan, year } = auto;

    // Agregar una base de 2000
    let resultado = 2000;

    // Obtener la diferencia de año
    let diferencia = obtenerDiferenciaAnio(year);

    // Restar el 3% por cada año
    resultado -= ((diferencia * 3) * resultado) / 100;

    // Americano 15%, Asiatico 5% y Europeo 30% mas caro
    resultado = calcularMarca(marca) * resultado;

    // El plan basico incrementa un 20% y el completo un 50%
    let incrementoPlan = obtenerPlan(plan);

    // Resultado
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    let coche = {
      marca: marca,
      year: year,
      plan: plan
    };
    // Aplicar el resultado
    this.setState({
      resultado: resultado,
      datos: coche
    });
  };

  render() {
    return (
      <div className="contenedor">
        <Header titulo="Cotizador de seguro de auto" />

        <div className="contenedor-formulario">
          <Formulario cotizarSeguro={this.cotizarSeguro} />
          <Resumen datos={this.state.datos} />
          <Resultado resultado={this.state.resultado} />
        </div>
      </div>
    );
  }
}

export default App;
