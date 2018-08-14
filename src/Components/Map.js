import React, { Component } from 'react';
import '../App.css';

class Map extends Component {

  state = {
    mapProps: {
      center: {lat: 43.6629, lng: -79.3957},
      zoom: 12,
      width: '100%',
      height: '100vh'
    }
  }

  initMap = () => {
    this.map = new window.google.maps.Map(this.refs.map, {
      center: this.state.mapProps.center,
      zoom: this.state.mapProps.zoom
    })
  }

  initMarkers = () => {
    this.props.places.map((place)=>{
      let marker = new window.google.maps.Marker({
        map: this.map,
        position: place.response.venue.location
      })

      let infowindow = new window.google.maps.InfoWindow({
        content: place.response.venue.name
      })

      marker.addListener('mouseover', function(event){
        infowindow.open(this.map, marker)
      })
      marker.addListener('mouseout', function(event){
        infowindow.close(this.map, marker)
      })
    })
  }

  componentDidMount() {
    this.initMap()
    this.initMarkers()
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
