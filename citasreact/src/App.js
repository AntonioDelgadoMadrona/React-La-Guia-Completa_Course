import React, { Component } from "react";
import Header from "./components/Header";
import AgregarCita from "./components/AgregarCita";
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
    citas: []
  };

  componentDidMount() {
    let citasLS = localStorage.getItem('citas');
    if(citasLS){
      this.setState({
        citas: JSON.parse(citasLS)
      })
    }
  };

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('citas', JSON.stringify(this.state.citas))
  }
  
  

  crearCita = nuevaCita => {
    const citas = [...this.state.citas, nuevaCita];

    this.setState({
      citas
    });
  };

  borrarCita = id => {
    let citasActuales = [...this.state.citas];

    // Traemos las cias creadas que no tengan ese id
    let citas = citasActuales.filter(cita => cita.id !== id)

    this.setState({
      citas
    })
  };

  render() {
    return (
      <div className="container">
        <Header titulo={"Administrador de pacientes de veterinaria"} />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas citas={this.state.citas} borrarCita={this.borrarCita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
