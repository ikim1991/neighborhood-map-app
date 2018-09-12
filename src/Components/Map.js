import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';

class Map extends Component {

  // initMap() function will initialize the google maps API on load

  initMap = () => {
      this.map = new window.google.maps.Map(this.refs.map, {
        center: this.props.mapProps.center,
        zoom: this.props.mapProps.zoom
      })
  }

  componentDidMount() {
    this.initMap();
    this.initMarkers();
  }

  // This function maps through the venues that are fetched from the Foursquare API
  // and initalizes a marker and infowindow based on the location of the venue.
  // It also adds functionality when markers are clicked and hovered over.

  initMarkers = () => {
      this.props.locations.map((location)=>{
      const marker = new window.google.maps.Marker({
        map: this.map,
        position: location.position,
        icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
      })

      let infowindow = new window.google.maps.InfoWindow({
        content: location.name
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
        this.props.setSelect(location.id)
        marker.setAnimation(window.google.maps.Animation.BOUNCE)
        setTimeout(function(){ marker.setAnimation(null); }, 2500)
        // this.map.panTo(location.position)
        // this.map.setZoom(17)
      }.bind(this))
    })
  }

  render() {

    return (
      <div className="map-container">
        <div
        ref="map"
        role="application"
        style={{
          width: '100%',
          height: '100vh'
        }}>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mapProps: state.mapReducer.mapProps,
    locations: state.mapReducer.locations
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelect: (sel) => dispatch({ type: 'SET_SELECT', payload: sel})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
