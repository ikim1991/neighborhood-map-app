import React, { Component } from 'react';
import '../App.css';

class SearchResults extends Component {

  highlightArea = (selected) => {
    selected.style ="background-color: #198cff;"
  }

  unhighlightArea = (selected) => {
    selected.style ="background-color: #f8f8ff;"
  }

  render() {
    return (
      <div className="searched-results-container">

      {
        // The rendering of the venue list components are broken into 2 sections, one for show all
        // results, and the other for filtering through the array of venues through a filtering method
      }
        <ul className="searched-results">
          {(this.props.showingAllResults) ? ((this.props.places[0]) ? (this.props.places.map(p =>
            <li
              key={p.response.venue.id}
              onMouseOver={(event)=>this.highlightArea(event.target)}
              onMouseOut={(event)=>this.unhighlightArea(event.target)}
              onClick={(event)=>this.props.onUpdateResults(event.target)}
            >
              {p.response.venue.name}
            </li>
          )) : (<li>No Listings Found</li>)) : ((this.props.query && this.props.places[0]) ? (this.props.places.filter(place=> {
            return place.response.venue.name.toLowerCase().indexOf(this.props.query.toLowerCase()) !== -1
          }).map(p =>
            <li
              key={p.response.venue.id}
              onMouseOver={(event)=>this.highlightArea(event.target)}
              onMouseOut={(event)=>this.unhighlightArea(event.target)}
              onClick={(event)=>this.props.onUpdateResults(event.target)}
            >
              {p.response.venue.name}
            </li>
          )) : (<li></li>))}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
