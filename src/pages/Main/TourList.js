import React from 'react';
import Carousel from '../../components/Carousel';
import TripInfoCard from '../../components/TripInfoCard';
import './TourList.scss';

const CAROUSEL_PROPS = {
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false
}

const TourList = ({title}) => {
  return (
    <div className="TourList">
      <h2>{title}</h2>
      <Carousel slickProps={CAROUSEL_PROPS}>
        <TripInfoCard/>
        <TripInfoCard/>
        <TripInfoCard/>
        <TripInfoCard/>
        <TripInfoCard/>
        <TripInfoCard/>
        <TripInfoCard/>
        <TripInfoCard/>
        <TripInfoCard/>
      </Carousel>
    </div>
  )
};

export default TourList;