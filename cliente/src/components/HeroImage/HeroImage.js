import Carousel from 'react-bootstrap/Carousel';
import './HeroImage.css'


function IndividualIntervalsHeroImage() {
  return (

  <section className='Contenedor'> 
    <Carousel controls = {false} fade={true} pause={false}  >
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src= "/assets/Foto1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <img
              src="/assets/logo2.png"
              width="300"
              height="300"
              className="d-inline-block align-top"
              alt="logo agenda"
            />
          <div className='Tittle'>
          <h3>GhamaChurros</h3>
          <p>Rua Conselheiro José Fernanades 134, Centro, RJ</p>
          <p>Abierto: De Terça Feira até Domingo das 16h até 23h</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src= "/assets/Foto2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
        <img
              src="/assets/logo2.png"
              width="300"
              height="300"
              className="d-inline-block align-top"
              alt="logo agenda"
            />
          <div className='Tittle'>
          <h3>GhamaChurros</h3>
          <p>Rua Conselheiro José Fernanades 134, Centro, RJ</p>
          <p>Abierto: De Terça Feira até Domingo das 16h até 23h</p>
          </div>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "/assets/Foto3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <img
              src="/assets/logo2.png"
              width="300"
              height="300"
              className="d-inline-block align-top"
              alt="logo agenda"
            />
          <div className='Tittle'>
          <h3>GhamaChurros</h3>
          <p>Rua Conselheiro José Fernanades 134, Centro, RJ</p>
          <p>Abierto: De Terça Feira até Domingo das 16h até 23h</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </section>
  );
}

export default IndividualIntervalsHeroImage;