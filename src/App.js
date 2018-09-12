import React, { Component } from 'react';
import './App.css';
import Map from './Components/Map'
import SearchBox from './Components/SearchBox'
import { connect } from 'react-redux'

import * as actionCreator from "./actions/actions"

class App extends Component {

  componentDidMount() {
    this.props.locations.map(location => this.props.onInit(location.id))
  }

  render() {
    return (
      <div className="App">
        <header className="app-header" role="banner">
          <h1>NEIGHBORHOOD MAP</h1>
        </header>
        <main className="app-main" role="main">
          <Map/>
          <div className="sidebar-container">
            <SearchBox />

            {
            // The sidebar container renders information made from the Foursquare API call.
            // It first filters to see which venue is selected either from a search call or
            // by clicking the designated marker and displays information such as a photo of the venue,
            // address info, website, and tips & reviews from users on Foursquare.
            }

            <div className="contentinfo-container">
              <div className="contentinfo">
                {(this.props.places[0]) ? (this.props.places.filter(place => place.response.venue.id === this.props.selected).map(p => {
                  return (
                    <div key={p.response.venue.id}>
                      <h2>{p.response.venue.name}</h2>
                      <img
                        src = {`${p.response.venue.bestPhoto.prefix}width${p.response.venue.bestPhoto.width}${p.response.venue.bestPhoto.suffix}`}
                        height="85%" width="85%"
                        alt="venue"
                      />
                      <div className="address-info">
                        <p><strong>Address:</strong> {p.response.venue.location.address}, {p.response.venue.location.city}, {p.response.venue.location.state}, {p.response.venue.location.postalCode}</p>
                      </div>
                      <div className="website-info">
                        <p><strong>Website:</strong><a href={p.response.venue.url}> {p.response.venue.url}</a></p>
                      </div>
                      <div className="tips-reviews">
                        <p><strong>Tips & Reviews:</strong></p>
                        {p.response.venue.tips.groups.filter((group) => group.items.length > 0).map((g) => {
                          return g.items.map((i, index) => {
                            return (
                              <div key={index}>
                                <p>"{i.text}"</p>
                                <p className="user"> -{i.user.firstName} {i.user.lastName} (Source: Foursquare.com)</p>
                              </div>
                            )
                          })
                        })}
                      </div>
                    </div>
                  )
                })) : (<div></div>)}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.mapReducer.locations,
    places: state.fetchReducer.places,
    query: state.mapReducer.query,
    selected: state.mapReducer.selected
  }
}

const dispatchToProps = (dispatch) => {
  return {
    onInit: (id) => dispatch(actionCreator.fetchData(id))
  }
}

export default connect(mapStateToProps, dispatchToProps)(App);
