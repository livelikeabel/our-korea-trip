import React from 'react';
import MainHeader from './MainHeader';
import MainMap from './MainMap';
import MapSearchResult from './MapSearchResult';
import TourList from './TourList';
import './index.scss';

const Main = () => {
  return (
    <div className="Main">
      <MainHeader />
      <div className="Main__map-wrapper">
        <MainMap />
        <MapSearchResult />
      </div>
      <TourList title="최근 본 여행지"/>
      <TourList title="신규 여행지"/>
    </div>
  )
}

export default Main;