import './App.css';
import IndividualIntervalsHeroImage from './components/HeroImage/HeroImage';
import {Comentarios} from './components/CaixaComentarios/CaixaComentarios'
import {Navbar, Container, Nav,} from "react-bootstrap";


 
function App() {
  return (
    <div className="App">
     {/* Aqui vão os componentes que for criando */}
     <Navbar  className="navbar">
        <Container>
        <img
              src="/assets/logo.png"
              width="40"
              height="40"
              className="b-inline-block align-top"
              alt="logo agenda"
            />
          <Nav  variant="pills" activeKey="1" className="me-auto">
            <Nav.Link eventKey="link-1" className="navbar-brand">nome</Nav.Link>
            <Nav.Link className="navbar-brand" >nome</Nav.Link>
          </Nav>
        </Container>   
      </Navbar>
     
      <>
          <IndividualIntervalsHeroImage/>

          <Comentarios/> 


      </>

      </div>

      );

      }



export default App;
