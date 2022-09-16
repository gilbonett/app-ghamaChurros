import './App.css';
import { CartProvider } from './context/cartContext';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import IndividualIntervalsHeroImage from './components/HeroImage/HeroImage';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <CartProvider>
          <Navbar/>
          <IndividualIntervalsHeroImage/>
          <Home/>
          <Footer/>
      </CartProvider>
    </div>

      );
  };
export default App; 