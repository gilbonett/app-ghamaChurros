import './App.css';
import IndividualIntervalsHeroImage from './components/HeroImage/HeroImage';
import {Comentarios} from './components/CaixaComentarios/CaixaComentarios'
<<<<<<< HEAD
import {Navbar,Carousel, Container, Nav,} from "react-bootstrap";

function App() {
  return (
    <div className="App">
  
      <>
          <IndividualIntervalsHeroImage/>

          <Comentarios/> 

=======
import {Navbar, Carousel, Nav,} from "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
    <div className="App">
     {/* Aqui vão os componentes que for criando */}
       <>
          <Navbar/>
          <IndividualIntervalsHeroImage/>
          <Comentarios/>
>>>>>>> 61a7511373c4b3c675aed669b42d35336701490e
      </>
    </div>

      );

<<<<<<< HEAD
      }


=======
>>>>>>> 61a7511373c4b3c675aed669b42d35336701490e
export default App;
