import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
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
  render() {
    const { children, slickProps } = this.props;

    const slickConfig = {
      ...DEFAULT_CONFIG,
      ...slickProps
    };
    return (
      <div>
        <Slick {...slickConfig} ref={this._slickRef}>
          {children}
        </Slick>
      </div>
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