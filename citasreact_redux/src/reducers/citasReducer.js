import { MOSTRAR_CITAS, BORRAR_CITA, AGREGAR_CITA } from "../actions/types";

// State inicial, cada reducer debe tener su propio state
const initialState = {
  citas: [
    {
      id: 0,
      fecha: "10-20-30",
      hora: "10:30",
      mascota: "Lobo",
      propietario: "Marcos",
      sintomas: "Se mea por todos lados"
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_CITAS:
      return { ...state };
    case AGREGAR_CITA:
      return { ...state, citas: [...state.citas, action.payload] };
    case BORRAR_CITA:
      return {
        ...state,
        citas: state.citas.filter(cita => cita.id !== action.payload)
      };
    default:
      return state;
  }
}
