import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BarraMenu from './components/BarraMenu';
import Principal from './components/Principal';
import Grid from '@mui/material/Grid';
import kunfu from './img/kunfu.jpg';
import villano from './img/villano.jpg';
import Carrito from './components/Carrito';
import Informacion from './components/Informacion';
import Registrar from './components/Registrar';

function App() {
  return (
    <Router>
      <div className="App">

        <BarraMenu />
        <br /><br />

        <div className='contenedorPrincipal'>
          <Routes>
            <Route path="/" element={
              <Grid container spacing={2}>
                <Grid item xs={6} sm={5} xl={2}>
                  <Principal
                    image={kunfu}
                    titulo='kung fu panda'
                    descripcion='Es un panda gigante que de manera improbable es elegido como el Guerrero Dragón, y es uno de los estudiantes del maestro Shifu. La profecía se refiere a Po como el Guerrero Dragón o guerrero de blanco y negro.'
                  />
                </Grid>
                <Grid item xs={6} sm={5} xl={2}>
                  <Principal
                    image={villano}
                    titulo='Mi villano favorito'
                    descripcion='Es un malo que disfruta haciendo maldades a los demás. Desde congelar la cola de clientes en una hamburguesería, hasta crear un globo en forma de animal y dárselo a un niño solo para tener el placer de hacerlo explotar.'
                  />
                </Grid>
              </Grid>
            } />
            <Route path="/Registrar" element={<Registrar />} />
            <Route path="/información" element={<Informacion />} />
            <Route path="/Carrito" element={<Carrito />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
