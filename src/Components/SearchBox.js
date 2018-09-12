import React, { Component } from 'react';
import SearchResults from './SearchResults'
import { connect } from 'react-redux'
import '../App.css';

class SearchBox extends Component {

  render() {

    return (
      <div className="search-box">
        <form>
          <input
            className="search-bar"
            type="text"
            placeholder="Search Marked Venues..."
            value={this.props.query}
            autoFocus="true"
            onChange={(event)=>this.props.updateQuery(event.target.value)}
          />
          <button
            className="search-results-button"
            onClick={(event)=>this.props.toggleButton(event)}
          >
            {this.props.button.buttonText}
          </button>
          <SearchResults
            places={this.props.places}
            query={this.props.query}
            showingAllResults={this.props.button.visibility}
          />

        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.mapReducer.location,
    places: state.mapReducer.places,
    query: state.mapReducer.query,
    button: state.mapReducer.buttonVisibilityFilter
  }
}

const dispatchToProps = (dispatch) => {
  return {
    updateQuery: (query) => dispatch({
      type: 'UPDATE_QUERY',
      payload: {
        query: query
      }
    }),
    toggleButton: (e) => dispatch({
      type: 'TOGGLE_BUTTON',
      payload: e
    })
  }
}

export default connect(mapStateToProps, dispatchToProps)(SearchBox);
