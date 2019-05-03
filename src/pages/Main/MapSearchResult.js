import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import './MapSearchResult.scss';
import seoul from '../../images/seoul.png';

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
      <Carousel slickProps={CAROUSEL_PROPS}>
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

const TripInfoCard = () => {
  return (
    <div className="TripInfoCard">
      <Link>
        <img src={seoul} />
        <div className="TripInfoCard__info">
          <div className="TripInfoCard__info__tags">
            <span>서울</span><span>경리단</span>
          </div>
          <div className="TripInfoCard__info__title">
            [제2롯데월드] 하늘과 맞닫는 121층 높이의 잠실타워
          </div>
          <p className="TripInfoCard__info__discription">
            초고층 높이에서 서울의 뷰를 한눈에 볼 수 있는 곳.
          </p>
        </div>
      </Link>
    </div>
  )
}

export default MapSearchResult;