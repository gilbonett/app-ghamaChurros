import './App.css';
import { CartProvider } from './context/cartContext';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <CartProvider>
          <Home/>
      </CartProvider>
    </div>

      );
  };
export default App; 