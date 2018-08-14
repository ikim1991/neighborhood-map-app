import React, { Component } from 'react';
import '../App.css';

class Map extends Component {

  state = {
    mapProps: {
      center: {lat: 43.6332, lng: -79.4186},
      zoom: 13,
      width: '100%',
      height: '100vh'
    }
  }

  initMap = () => {
    new window.google.maps.Map(this.refs.map, {
      center: this.state.mapProps.center,
      zoom: this.state.mapProps.zoom
    })
  }

  componentDidMount() {
    this.initMap()
  }

  render() {

    const { mapProps } = this.state

    return (
      <div className="map-container">
        <div
          ref="map"
          style={{
            width: mapProps.width,
            height: mapProps.height,
            border: '1px solid black'
          }}>
        </div>
      </div>
    );
  }
}

export default Map;
