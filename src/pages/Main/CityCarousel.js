import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import cityData from '../../constants/cityData';
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
      {cityData.map(city => <CityCard {...city} key={city.name} />)}
    </Carousel>
  )
}

const CityCard = ({ href, img, name }) => (
  <Link to={href} className="CityCard" style={{ backgroundImage: `url(${img})` }}>
    <div className="CityCard__wrapper" />
    <h3>{name}</h3>
  </Link>
)

export default CityCarousel;