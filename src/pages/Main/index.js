import React from 'react';
import MainHeader from './MainHeader';
import MainMap from './MainMap';
import MapSearchResult from './MapSearchResult';
import TourList from './TourList';
import './index.scss';

import {useEffect} from 'react'; 
import simpleFetch from '../../constants/simpleFetch';

const Main = () => {

  useEffect(() => {
    console.log('한번만 실행돼?')
    simpleFetch('cityData').then(res => console.log(res))
  },[])

  return (
    <div className="Main">
      <MainHeader />
      <div className="Main__map-wrapper">
        <MainMap />
        <MapSearchResult />
      </div>
      <TourList title="추천 여행지"/>
      <TourList title="신규 여행지"/>
    </div>
  )
}

export default Main;