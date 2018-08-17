import React, { Component } from 'react';
import '../App.css';

class SearchResults extends Component {

  state = {
    places: this.props.places,
  }

  highlightArea = (selected) => {
    selected.style ="background-color: #198cff;"
  }

  unhighlightArea = (selected) => {
    selected.style ="background-color: #f8f8ff;"
  }

  render() {
    return (
      <div>
        <ul className="searched-results">
          { (this.props.query) ? (this.props.places.filter(place=> {
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
          )) : (<li></li>)}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
