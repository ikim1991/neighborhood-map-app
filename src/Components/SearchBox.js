import React, { Component } from 'react';
import SearchResults from './SearchResults'
import '../App.css';

class SearchBox extends Component {

  state = {
    query:''
  }

  updateQuery = (query) => {
    this.setState({
    query: query
    })

  }

  updateResults = (selected) => {
    this.props.searchResults(selected.innerHTML)
    this.props.onClickCenter(selected.innerHTML)
    this.setState({
      query: ''
    })
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
          <SearchResults places={this.props.places} query={this.state.query} onUpdateResults={this.updateResults}/>
        </form>
      </div>
    );
  }
}

export default SearchBox;
