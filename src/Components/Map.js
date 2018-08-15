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
    this.props.places.map((place, index, arr)=>{
      let marker = new window.google.maps.Marker({
        map: this.map,
        position: place.response.venue.location,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
      })

      let infowindow = new window.google.maps.InfoWindow({
        content: place.response.venue.name
      })

      marker.addListener('mouseover', function(){
        infowindow.open(this.map, marker)
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png')
      })
      marker.addListener('mouseout', function(){
        infowindow.close(this.map, marker)
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/red-dot.png')
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
            height: mapProps.height
          }}>
        </div>
      </div>
    );
  }
}

export default Map;
