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
    console.log(query)
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
          <SearchResults places={this.props.places} query={this.state.query}/>
        </form>
      </div>
    );
  }
}

export default SearchBox;
