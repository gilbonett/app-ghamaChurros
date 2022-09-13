import './App.css';
import IndividualIntervalsHeroImage from './components/HeroImage/HeroImage';
import {Comentarios} from './components/Footer/CaixaComentario/CaixaComentarios'
import Navbar from "./components/Navbar/Navbar";
import Menu from './components/Menu/Menu';
import items1 from './Items1';
import items2 from './Items2';
import items3 from './Items3';


function App() {
  return (
    <div className="App">
       <>
          <Navbar/>
          <IndividualIntervalsHeroImage/>
          <div>
          <Menu name="Churros Simples" desc="Churros saborosos feitos com massas fresquinhas" menu={items1} />
          <Menu name="Bebidas"  menu={items2} />
          <Menu name="Combo"  menu={items3} />
          </div>
          <Comentarios/>
      </>
    </div>

      );
  }
export default App;
