import React, { Component } from 'react';
import SearchResults from './SearchResults'
import '../App.css';

class SearchBox extends Component {

  state = {
    query:'',
    button: {
      showAll: false,
      text: 'Show All'
    }
  }

  updateQuery = (query) => {
    this.setState({
    query: query
    })

  }

  // This function passes down data from the parent component to it's child component in order
  // render and update the sidebar container UI and recenter Google Maps to the correct venue

  updateResults = (selected) => {
    this.props.searchResults(selected.innerHTML)
    this.props.onClickCenter(selected.innerHTML)
    this.setState({
      query: ''
    })
  }

  // This function lists all venues in the directory and renders the list as search results
  // via a button

  showAll = (e) => {
    e.preventDefault();
    if (this.state.button.showAll === false) {
      this.setState({
        button: {
          showAll: true,
          text: 'Hide All'
        }
      })
    } else {
      this.setState({
        button: {
          showAll: false,
          text: 'Show All'
        }
      })
    }
  }

  render() {

    return (
      <div className="search-box">
        <form>
          <input
            className="search-bar"
            type="text"
            placeholder="Search Marked Venues..."
            value={this.state.query}
            autoFocus="true"
            onChange={(event)=>this.updateQuery(event.target.value)}
          />
          <button
            className="search-results-button"
            onClick={(event)=>this.showAll(event)}
          >
            {this.state.button.text}
          </button>
          <SearchResults
            places={this.props.places}
            query={this.state.query}
            onUpdateResults={this.updateResults}
            showingAllResults={this.state.button.showAll}
          />

        </form>
      </div>
    );
  }
}

export default SearchBox;
