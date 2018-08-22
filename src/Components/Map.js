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

  // initMap() function will initialize the google maps API on load

  initMap = () => {
      this.map = new window.google.maps.Map(this.refs.map, {
        center: this.state.mapProps.center,
        zoom: this.state.mapProps.zoom
      })
  }

  // This function maps through the venues that are fetched from the Foursquare API
  // and initalizes a marker and infowindow based on the location of the venue.
  // It also adds functionality when markers are clicked and hovered over.

  initMarkers = () => {
      this.props.places.map((place)=>{
        let marker = new window.google.maps.Marker({
          map: this.map,
          position: place.response.venue.location,
          icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
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
          marker.setAnimation(window.google.maps.Animation.BOUNCE)
          this.map.panTo(place.response.venue.location)
          this.map.setZoom(17)
        }.bind(this))
      })
  }

// This function pulls information from the parent component to add custom functions to
// markers such as panning and zooming when clicked

  onMarkerClick = (content) => {
    this.props.onClickMarker(content)
  }

  componentDidMount() {
    this.initMap()
    this.initMarkers()
  }

// When a venue is selected through the search bar, the parent component passes properties
// down and rerenders the UI allowing it to pan over and zoom to the selected venue

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
          role="application"
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
