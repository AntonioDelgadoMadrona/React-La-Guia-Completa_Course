import React, { Component } from "react";
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AgregarCita extends Component {

    // refs
    nombreMascoteaRef = React.createRef();
    propietarioRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomasRef = React.createRef();

  state = {
      error: false,
  };

  crearNuevaCita = e => {
    e.preventDefault();

    let mascota = this.nombreMascoteaRef.current.value;
    let propietario = this.propietarioRef.current.value;
    let fecha = this.fechaRef.current.value;
    let hora = this.horaRef.current.value;
    let sintomas = this.sintomasRef.current.value;

    if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
        this.setState({
            error: true
        })
    } else {
        const nuevaCita = {
            id: uuid(),
            mascota,
            propietario,
            fecha,
            hora,
            sintomas,
        };
    
        // se envia el objeto al padre para actualizar el state
        this.props.crearCita(nuevaCita);
        e.currentTarget.reset();

        this.setState({
            error: false
        })
    }

  };

  render() {
      const existeError = this.state.error;

    return (
      <div className="card mt-5">
        <div className="card-body" />
        <h2 className="card-title text-center mb-5">Agregar citas</h2>
        <form onSubmit={this.crearNuevaCita}>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              Nombre Mascota
            </label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Mascota"
                ref={this.nombreMascoteaRef}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">
              Nombre Dueño
            </label>
            <div className="col-sm-8 col-lg-10">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Dueño de la Mascota"
                ref={this.propietarioRef}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
            <div className="col-sm-8 col-lg-4  mb-4 mb-lg-0">
              <input type="date" className="form-control" ref={this.fechaRef} />
            </div>

            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
            <div className="col-sm-8 col-lg-4">
              <input type="time" className="form-control" ref={this.horaRef} />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
            <div className="col-sm-8 col-lg-10">
              <textarea className="form-control" ref={this.sintomasRef} />
            </div>
          </div>
          <div className="form-group row justify-content-end">
            <div className="col-sm-3">
              <button type="submit" className="btn btn-success w-100">
                Agregar
              </button>
            </div>
          </div>
        </form>
        {existeError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}
      </div>
    );
  }
};

AgregarCita.propTypes = {
    crearCita: PropTypes.func.isRequired,
};

export default AgregarCita;
