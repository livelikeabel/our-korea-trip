import React from 'react';
import Carousel from '../../components/Carousel';
import TripInfoCard from '../../components/TripInfoCard';
import './MapSearchResult.scss';

const CAROUSEL_PROPS = {
  autoplay: false,
  slidesToShow: 2,
  slidesToScroll: 2,
  row: 2,
  slidesPerRow: 2
}

const MapSearchResult = () => {
  return (
    <div className="MapSearchResult">
      <h2>서울 여행지 추천 해드려요!</h2>
      <Carousel slickProps={CAROUSEL_PROPS} showArrowBtn={false}>
        <TripInfoCard />
        <TripInfoCard />
        <TripInfoCard />
        <TripInfoCard />
        <TripInfoCard />
        <TripInfoCard />
        <TripInfoCard />
        <TripInfoCard />
        <TripInfoCard />
      </Carousel>
    </div>
  )
}

export default MapSearchResult;