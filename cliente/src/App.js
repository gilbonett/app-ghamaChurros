import './App.css';
import IndividualIntervalsHeroImage from './components/HeroImage/HeroImage';
import Navbar from "./components/Navbar/Navbar";
import Footer from './components/Footer/Footer';
import Products from './components/Products/Menu';


function App() {
  return (
    <div className="App">
       <>
          <Navbar/>
          <IndividualIntervalsHeroImage/>
          <Products/>
          <Footer/>
      </>
    </div>

      );
  }
export default App; 