import React, { Component } from 'react';
import '../App.css';

class Map extends Component {

  state = {
    mapProps: {
      center: {lat: 43.6629, lng: -79.3957},
      zoom: 12,
      width: '100%',
      height: '100vh'
    },
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
        marker.addListener('click', function(){
          this.onMarkerClick(infowindow.content)
          this.map.panTo(place.response.venue.location)
          this.map.setZoom(17)
        }.bind(this))
      })
  }

  onMarkerClick = (content) => {
    this.props.onClickMarker(content)
  }

  componentDidMount() {
    this.initMap()
    this.initMarkers()
  }

  componentDidUpdate(){
    this.props.places.filter(place => place.response.venue.name === this.props.recenter)
      .map(p => {
        this.map.panTo(p.response.venue.location)
        this.map.setZoom(17)
      })
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
