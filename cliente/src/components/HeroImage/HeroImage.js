import Carousel from 'react-bootstrap/Carousel';
import './HeroImage.css'

function IndividualIntervalsHeroImage() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="/assets/Foto1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
        <img
              src="/assets/logo2.png"
              width="180"
              height="180"
              className="d-inline-block align-top"
              alt="logo agenda"
            />
          <div className='Tittle'>
          <h3>Ghamachurros</h3>
          <p>Rua Conselheiro José Fernanades 134, Centro, RJ</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="/assets/Foto2.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= "/assets/Foto3.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsHeroImage;