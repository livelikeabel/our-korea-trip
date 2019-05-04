import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './TripInfoCard.scss';

const TripInfoCard = ({tags, img, title, discription}) => {
  return (
    <div className="TripInfoCard">
      <Link to="/">
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