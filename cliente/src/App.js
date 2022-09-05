import './App.css';
import {Navbar, Container, Nav,Carousel} from "react-bootstrap"

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
              className="d-inline-block align-top"
              alt="logo agenda"
            />
          <Nav  variant="pills" activeKey="1" className="me-auto">
            <Nav.Link eventKey="link-1" className="navbar-brand">nome</Nav.Link>
            <Nav.Link className="navbar-brand" >nome</Nav.Link>
          </Nav>
        </Container>   
      </Navbar>

<section>
  <div className='Container-Carusel'>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100" 
          width= {500}
          src="https://cooknenjoy.com/wp-content/uploads/2021/09/Churros-Facil-01-1536x1154.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <img
              src="/assets/logo2.png"
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="logo agenda"
            />
          <h3>Ghamachurros</h3>
          <p>Rua Conselheiro José Fernandes 134, Centro, RJ.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://cooknenjoy.com/wp-content/uploads/2021/09/Churros-Facil-01-1536x1154.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <img
              src="/assets/logo2.png"
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="logo agenda"
            />
          <h3>Ghamachurros</h3>
          <p>Rua Conselheiro José Fernandes 134, Centro, RJ.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cooknenjoy.com/wp-content/uploads/2021/09/Churros-Facil-01-1536x1154.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <img
              src="/assets/logo2.png"
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="logo agenda"
            />
          <h3>Ghamachurros</h3>
          <p>Rua Conselheiro José Fernandes 134, Centro, RJ.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   </section>
 </div>
  );
}

export default App;
