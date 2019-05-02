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
const CUSTOM_ICON_BUTTON_STYLE = {
  height: 40,
  width: 40,
  padding: 0, background: '#fff',
  boxShadow: '0 0 0 1px rgba(0,0,0,.05), 0 2px 6px 0 rgba(0,0,0,.05), 0 4px 12px 0 rgba(0,0,0,.05)'
};
const CUSTOM_SVG_STYLE = { stroke: "#3F3F3F" }

class Carousel extends PureComponent {
  constructor(props) {
    super(props);
    this._slickRef = createRef();
  };
  _renderArrow = (direction = 'right') => (
    <div className={`arrow-${direction}`}>
      <IconButton
        onClick={this._handleSlide.bind(this, direction)}
        style={CUSTOM_ICON_BUTTON_STYLE}
      >
        <Chevron direction={direction} customStyle={CUSTOM_SVG_STYLE} />
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
        <div className="Carousel-arrow">
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