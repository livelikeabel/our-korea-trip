import React from 'react';
import Search from '../../components/Search';
import './MainHeader.scss';

const MainHeader = () => {
  return (
    <section className="MainHeader">
      <h2>어디 가고 싶으세요?</h2>
      <div className="MainHeader__search">
        <Search/>
      </div>
    </section>
  )
}

export default MainHeader;