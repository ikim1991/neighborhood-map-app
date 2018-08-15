import React, { Component } from 'react';
import SearchBox from './SearchBox'
import '../App.css';

class SideBar extends Component {

  render() {
    return (
      <div className="sidebar-container">
        <SearchBox places={this.props.places}/>
      </div>
    );
  }
}

export default SideBar;
