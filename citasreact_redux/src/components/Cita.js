import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { borrarCita } from '../actions/citasActions';

class Cita extends Component {

    eliminarCita = () => {
        this.props.borrarCita(this.props.info.id);
    };

    render(){

        const { fecha, hora, mascota, propietario, sintomas, id } = this.props.info;
        return(
            <div className="media mt-3" >
                <div className="media-body" key={id}>
                    <h3 className="mt-0">{mascota}</h3>
                    <p className="card-text"><strong>Nombre del Dueño: </strong>{propietario}</p>
                    <p className="card-text"><strong>Fecha: </strong>{fecha}</p>
                    <p className="card-text"><strong>Hora: </strong>{hora}</p>
                    <p className="card-text"><strong>Sintomas: </strong></p>
                    <p className="card-text">{sintomas}</p>

                    <button onClick={this.eliminarCita} className="btn btn-danger">Borrar</button>
                </div>
            </div>
        )
    }
};

Cita.propTypes = {
    borrarCita: PropTypes.func.isRequired,
    info: PropTypes.object.isRequired,
}

export default connect(null, { borrarCita })(Cita);