import React from 'react';
import Carousel from '../../components/Carousel';
import TripInfoCard from '../../components/TripInfoCard';
import './RecentTourList.scss';

const CAROUSEL_PROPS = {
  autoplay: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false
}

const RecentTourList = () => {
  return (
    <div className="RecentTourList">
      <h2>최근 본 여행지</h2>
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

export default RecentTourList;