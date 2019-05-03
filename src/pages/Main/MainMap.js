import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './MainMap.scss';

mapboxgl.accessToken = 'pk.eyJ1IjoiYWJlbGtvIiwiYSI6ImNqdjZqeDBuMTA2MHYzeXBmc2gxNGVnMWkifQ.Rjjvuhc0WYMdlzKjYhM5iw';


class MainMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 1.5
    }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom
    });

    map.on('move', () => {
      const { lng, lat } = map.getCenter();

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });
  }
  render() {
    return (
      <section className="MainMap">
        <div className="MainMap__map" ref={el => this.mapContainer = el} />
      </section>
    )
  }
}

export default MainMap;