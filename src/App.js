import React, { Component } from 'react';
import './App.css';
import Map from './Components/Map'
import SideBar from './Components/SideBar'

class App extends Component {

  state = {
    locations: [
      {
        id: "4ad4c064f964a52074f820e3",
        name: "Aviva Centre"
      },
      {
        id: "4b155081f964a520b4b023e3",
        name: "Scotiabank Arena"
      },
      {
        id: "4ad4c062f964a520f3f720e3",
        name: "BMO Field"
      },
      {
        id: "4ad4c061f964a520adf720e3",
        name: "Rogers Centre"
      },
      {
        id: "4ad4c05ef964a520d9f620e3",
        name: "Royal Ontario Museum"
      }
    ],
    places: [
      {
        response: {
          venue: {
          id: "4ad4c064f964a52074f820e3",
          name: "Aviva Centre",
          location: {
            lat: 43.77155334201711,
            lng: -79.51192650368728,
            }
          }
        }
      },
      {
        response: {
        venue: {
          id: "4b155081f964a520b4b023e3",
          name: "Scotiabank Arena",
          location: {
            lat: 43.64344617535107,
            lng: -79.37903988889991,
          }
          }
        }
      },
      {
        response: {
        venue: {
          id: "4ad4c062f964a520f3f720e3",
          name: "BMO Field",
          location: {
            lat: 43.6334602365744,
            lng: -79.41805960865929,
          }
          }
        }
      },
      {
        response: {
        venue: {
          id: "4ad4c061f964a520adf720e3",
          name: "Rogers Centre",
          location: {
            lat: 43.64192957603611,
            lng: -79.38905239105225,
          }
          }
        }
      },
      {
        response: {
        venue: {
          id: "4ad4c05ef964a520d9f620e3",
          name: "Royal Ontario Museum",
          location: {
            lat: 43.668367065616046,
            lng: -79.3948129405877,
          }
          }
        }
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <div className="app-header">
          <h1>NEIGHBORHOOD MAP</h1>
        </div>
        <div className="app-main">
          <Map places={this.state.places} />
          <SideBar places={this.state.places} />
        </div>
      </div>
    );
  }
}

export default App;
