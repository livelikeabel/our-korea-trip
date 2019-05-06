import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './TripInfoCard.scss';

const TripInfoCard = ({tags, img, title, discription}) => {

  // const imgEl = useRef();

  // useEffect(() => {
  //   const observer = new IntersectionObserver ((
  //     entries => {
  //       entries.forEach(entry => {
  //         const { isIntersecting } = entry;

  //         if (isIntersecting) {
  //           observer.src = 
  //         }
  //       })
  //     }
  //   ) => {

  //   },
  //   {
  //     // root라는 키로 컨테이너 ref를 넘겨 주어야 할 것 같다...
  //     // root: document.querySelector(".container") ??
  //   });

  //   observer.observe(imgEl)
  // }, []);

  return (
    <div className="TripInfoCard">
      <Link to="/">
        {/* <img ref={imgEl} src={img} /> */}
        <img src={img} />
        <div className="TripInfoCard__info">
          <div className="TripInfoCard__info__tags">
            {tags.map((tag, i) => <span key={i}>{tag}</span>)}
          </div>
          <div className="TripInfoCard__info__title">
            {title}
          </div>
          <p className="TripInfoCard__info__discription">
            {discription}
          </p>
        </div>
      </Link>
    </div>
  )
}

TripInfoCard.propTypes = {
  tags: PropTypes.array,
  img: PropTypes.string,
  title: PropTypes.string,
  discription: PropTypes.string
}

export default TripInfoCard;