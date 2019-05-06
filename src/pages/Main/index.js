import React from 'react';
import MainHeader from './MainHeader';
import MainMap from './MainMap';
import MapSearchResult from './MapSearchResult';
import TourList from './TourList';
import './index.scss';

import { useState, useEffect } from 'react';
import simpleFetch from '../../constants/simpleFetch';

const Main = () => {

  const [newTripMockData, setNewTripMockData] = useState([]);
  const [recommendTripMockData, setRecommendTripMockData] = useState([]);
  const [seoulkMockData, setSeoulMockData] = useState([]);

  useEffect(() => {
    simpleFetch('newTripMockData')
      .then(res => setNewTripMockData(res))
    simpleFetch('recommendTripMockData')
      .then(res => setRecommendTripMockData(res))
    simpleFetch('seoulMockData')
      .then(res => setSeoulMockData(res))
  }, [])

  return (
    <div className="Main">
      <MainHeader />
      <div className="Main__map-wrapper">
        <MainMap />
        <MapSearchResult searchData={seoulkMockData} />
      </div>
      <TourList title="추천 여행지" tripData={newTripMockData} />
      <TourList title="신규 여행지" tripData={recommendTripMockData} />
    </div>
  )
}

export default Main;