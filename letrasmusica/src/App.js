import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Formulario from "./components/Formulario";
import Cancion from "./components/Cancion";
import Informacion from "./components/Informacion";

function App() {
  const [artista, agregarArtista] = useState("");
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  const consultarApiLetra = async busqueda => {
    const { artista, cancion } = busqueda;
    let url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
    let resultado = await axios(url);

    agregarLetra(resultado.data.lyrics);
    agregarArtista(artista);
  };

  const consultarApiInfo = async artista => {
    if (artista) {
      let url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      let resultado = await axios(url);

      agregarInfo(resultado.data.artists[0]);
    }
  };

  useEffect(() => {
    consultarApiInfo(artista);
  }, [artista]);

  return (
    <Fragment>
      <Formulario consultarApiLetra={consultarApiLetra} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion info={info} />
          </div>
          <div className="col-md-6">
            <Cancion letra={letra} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
