import React from 'react';
import MainHeader from './MainHeader';
import MainMap from './MainMap';
import MapSearchResult from './MapSearchResult';
import './index.scss';

const Main = () => {
  return (
    <div className="Main">
      <MainHeader />
      <div className="Main__map-wrapper">
        <MainMap />
        <MapSearchResult />
      </div>
    </div>
  )
}

export default Main;