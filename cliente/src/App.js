import './App.css';
import IndividualIntervalsHeroImage from './components/HeroImage/HeroImage';
import {Comentarios} from './components/CaixaComentarios/CaixaComentarios'
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    <div className="App">
     {/* Aqui vão os componentes que for criando */}
       <>
          <Navbar/>
          <IndividualIntervalsHeroImage/>
          <Comentarios/>
      </>
    </div>

      );
  }
export default App;
