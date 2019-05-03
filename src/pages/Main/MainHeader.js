import React from 'react';
import Search from '../../components/Search';
import CityCarousel from './CityCarousel';
import './MainHeader.scss';

const MainHeader = () => {
  return (
    <section className="MainHeader">
      <h2>어디 가고 싶으세요?</h2>
      <div className="MainHeader__search">
        <Search />
      </div>
      <div className="MainHeader__carousel-wrapper">
        <div className="MainHeader__carousel">
          <CityCarousel />
        </div>
      </div>
    </section>
  )
}

export default MainHeader;