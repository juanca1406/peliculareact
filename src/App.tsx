import './App.css';
import sisebuto from './img/rey_sisebuto.png'
import recesvinto from './img/rey_recesvinto.png'
import BarraMenu from './components/BarraMenu';
import Principal from './components/Principal'
function App() {

  return (
    <div className="App">
      <BarraMenu />
      <br /><br />
      <Principal />
    </div>
  );
}

export default App;
