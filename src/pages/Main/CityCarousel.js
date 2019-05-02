import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import seoul from '../../images/seoul.png';
import './CityCarousel.scss';

const CITY_CAROUSEL_PROPS = {
  autoplay: false,
  slidesToShow: 6,
  slidesToScroll: 6,
  dots: false
}

const CityCarousel = () => {
  return (
    <Carousel slickProps={CITY_CAROUSEL_PROPS}>
      <CityCard herf="/" title="서울" img={seoul}/>
      <CityCard herf="/" title="서울" img={seoul}/>
      <CityCard herf="/" title="서울" img={seoul}/>
      <CityCard herf="/" title="서울" img={seoul}/>
      <CityCard herf="/" title="서울" img={seoul}/>
      <CityCard herf="/" title="서울" img={seoul}/>
      <CityCard herf="/" title="서울" img={seoul}/>
      <CityCard herf="/" title="서울" img={seoul}/>
      <CityCard herf="/" title="서울" img={seoul}/>
      <CityCard herf="/" title="서울" img={seoul}/>
      <CityCard herf="/" title="서울" img={seoul}/>
      <CityCard herf="/" title="서울" img={seoul}/>
    </Carousel>
  )
}

const CityCard = ({ herf, img, title }) => (
  <Link to={herf} className="CityCard" style={{ backgroundImage: `url(${img})` }}>
    <div className="CityCard__wrapper" />
    <h3>{title}</h3>
  </Link>
)

export default CityCarousel;