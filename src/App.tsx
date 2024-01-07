import './App.css';
import BarraMenu from './components/BarraMenu';
import Principal from './components/Principal'
import Grid from '@mui/material/Grid';
import kunfu from './img/kunfu.jpg';
import villano from './img/villano.jpg';

function App() {

  return (
    <div className="App">
      <BarraMenu />
      <br /><br />

      <div className='contenedorPrincipal'>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Principal

              image={kunfu}
              titulo='kung fu panda'
              descripcion=' Es un panda gigante que de manera improbable es elegido como el Guerrero Dragón, 
            y es uno de los estudiantes del maestro Shifu. La profecía se refiere a Po como el Guerrero Dragón o guerrero de blanco y negro.'
            />
          </Grid>
          <Grid item xs={2}>
            <Principal
              image={villano}
              titulo='Mi villano favorito'
              descripcion='es un malo que disfruta haciendo maldades a los demás.
             Desde congelar la cola de clientes en una hamburguesería, hasta crear un globo en forma de animal y dárselo a un niño sólo para tener el placer de hacerlo explotar'
            />
          </Grid>
          <Grid item xs={2}>
            <Principal
              image={villano}
              titulo='Mi villano favorito'
              descripcion='es un malo que disfruta haciendo maldades a los demás.
             Desde congelar la cola de clientes en una hamburguesería, hasta crear un globo en forma de animal y dárselo a un niño sólo para tener el placer de hacerlo explotar'
            />
          </Grid>
        </Grid>
      </div>
    </div >
  );
}

export default App;
