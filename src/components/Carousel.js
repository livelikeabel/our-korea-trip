import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import IconButton from '@material-ui/core/IconButton';
import Chevron from './Chevron';
import './Carousel.scss';


const DEFAULT_CONFIG = {
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  dots: true,
  customPaging: () => <button />
};

class Carousel extends PureComponent {
  constructor(props) {
    super(props);
    this._slickRef = createRef();
  };
  _renderArrow = (direction = 'right') => (
    <div className={`arrow-${direction}`}>
      <IconButton
        onClick={this._handleSlide.bind(this, direction)}
      >
        <Chevron direction={direction} customStyle={{ stroke: "red" }} />
      </IconButton>
    </div>
  );
  _handleSlide = (direction = 'right') => {
    direction == 'right' ?
      this._slickRef.current.slickNext() :
      this._slickRef.current.slickPrev();
  }

  render() {
    const { children, slickProps } = this.props;

    const slickConfig = {
      ...DEFAULT_CONFIG,
      ...slickProps
    };
    return (
      <>
        <div>
          {this._renderArrow('left')}
          {this._renderArrow('right')}
        </div>
        <Slick {...slickConfig} ref={this._slickRef}>
          {children}
        </Slick>
      </>
    )
  }
};
Carousel.defaultProps = {
  children: [],
  slickProps: {}
};
Carousel.propTypes = {
  children: PropTypes.node,
  slickProps: PropTypes.object
};

export default Carousel;