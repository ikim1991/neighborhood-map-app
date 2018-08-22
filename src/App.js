import React, { Component } from 'react';
import './App.css';
import Map from './Components/Map'
import SearchBox from './Components/SearchBox'
import * as FoursquareAPI from './Components/FoursquareAPI'

class App extends Component {

  state = {
    locations: [
      {
        id: "4ad4c064f964a52074f820e3",
        name: "Aviva Centre"
      },
      // {
      //   id: "4b155081f964a520b4b023e3",
      //   name: "Scotiabank Arena"
      // },
      // {
      //   id: "4ad4c062f964a520f3f720e3",
      //   name: "BMO Field"
      // },
      // {
      //   id: "4ad4c061f964a520adf720e3",
      //   name: "Rogers Centre"
      // },
      // {
      //   id: "4ad4c05ef964a520d9f620e3",
      //   name: "Royal Ontario Museum"
      // }
    ],
    places: [
      // {
      //   meta: {
      //     code: 200
      //   },
      //   response: {
      //     venue: {
      //       id: "4ad4c064f964a52074f820e3",
      //       name: "Aviva Centre",
      //     location: {
      //       lat: 43.77155334201711,
      //       lng: -79.51192650368728,
      //       address: "1 Shoreham Dr.",
      //       postalCode: "M3N 3A6",
      //       cc: "CA",
      //       city: "Toronto",
      //       state: "ON",
      //       country: "Canada",
      //     },
      //     tips: {
      //       groups: [
      //         {
      //           items: [
      //             {
      //               text: "PCL constructed this project under major time constraints, as the client had committed to hosting a major tennis competition.",
      //               user: {
      //                 lastName: 'PCL Construction'
      //               }
      //             },
      //             {
      //               text: "Nice place for the York convocation 🎓",
      //               user: {
      //                 lastName: 'Amina',
      //                 firstName: 'Kamran'
      //               }
      //             },
      //           ]
      //         },
      //         {
      //           items: [
      //             {
      //               text: "How you doin'?",
      //               user: {
      //                 lastName: 'Tribianni',
      //                 firstName: 'Joey'
      //               }
      //             },
      //             {
      //               text: "That's what she said",
      //               user: {
      //                 lastName: 'Michael',
      //                 firstName: 'Scott'
      //               }
      //             },
      //           ]
      //         }
      //       ]
      //     },
      //     url: "http://google.ca"
      //     }
      //   }
      // },
      // {
      //   response: {
      //   venue: {
      //     id: "4b155081f964a520b4b023e3",
      //     name: "Scotiabank Arena",
      //     location: {
      //       lat: 43.64344617535107,
      //       lng: -79.37903988889991,
      //       address: "1 Shoreham Dr.",
      //       postalCode: "M3N 3A6",
      //       cc: "CA",
      //       city: "Toronto",
      //       state: "ON",
      //       country: "Canada",
      //     },
      //     tips: {
      //       groups: [
      //         {
      //           items: [
      //             {
      //               text: "PCL constructed this project under major time constraints, as the client had committed to hosting a major tennis competition.",
      //               user: {
      //                 lastName: 'PCL Construction'
      //               }
      //             },
      //             {
      //               text: "Nice place for the York convocation 🎓",
      //               user: {
      //                 lastName: 'Amina',
      //                 firstName: 'Kamran'
      //               }
      //             },
      //           ]
      //         },
      //         {
      //           items: [
      //             {
      //               text: "How you doin'?",
      //               user: {
      //                 lastName: 'Tribianni',
      //                 firstName: 'Joey'
      //               }
      //             },
      //             {
      //               text: "That's what she said",
      //               user: {
      //                 lastName: 'Michael',
      //                 firstName: 'Scott'
      //               }
      //             },
      //           ]
      //         }
      //       ]
      //     },
      //     url: "http://google.ca"
      //     }
      //   }
      // },
      // {
      //   response: {
      //   venue: {
      //     id: "4ad4c062f964a520f3f720e3",
      //     name: "BMO Field",
      //     location: {
      //       lat: 43.6334602365744,
      //       lng: -79.41805960865929,
      //       address: "1 Shoreham Dr.",
      //       postalCode: "M3N 3A6",
      //       cc: "CA",
      //       city: "Toronto",
      //       state: "ON",
      //       country: "Canada",
      //     },
      //     tips: {
      //       groups: [
      //         {
      //           items: [
      //             {
      //               text: "PCL constructed this project under major time constraints, as the client had committed to hosting a major tennis competition.",
      //               user: {
      //                 lastName: 'PCL Construction'
      //               }
      //             },
      //             {
      //               text: "Nice place for the York convocation 🎓",
      //               user: {
      //                 lastName: 'Amina',
      //                 firstName: 'Kamran'
      //               }
      //             },
      //           ]
      //         },
      //         {
      //           items: [
      //             {
      //               text: "How you doin'?",
      //               user: {
      //                 lastName: 'Tribianni',
      //                 firstName: 'Joey'
      //               }
      //             },
      //             {
      //               text: "That's what she said",
      //               user: {
      //                 lastName: 'Michael',
      //                 firstName: 'Scott'
      //               }
      //             },
      //           ]
      //         }
      //       ]
      //     },
      //     url: "http://google.ca"
      //     }
      //   }
      // },
      // {
      //   response: {
      //   venue: {
      //     id: "4ad4c061f964a520adf720e3",
      //     name: "Rogers Centre",
      //     location: {
      //       lat: 43.64192957603611,
      //       lng: -79.38905239105225,
      //       address: "1 Shoreham Dr.",
      //       postalCode: "M3N 3A6",
      //       cc: "CA",
      //       city: "Toronto",
      //       state: "ON",
      //       country: "Canada",
      //     },
      //     tips: {
      //       groups: [
      //         {
      //           items: [
      //             {
      //               text: "PCL constructed this project under major time constraints, as the client had committed to hosting a major tennis competition.",
      //               user: {
      //                 lastName: 'PCL Construction'
      //               }
      //             },
      //             {
      //               text: "Nice place for the York convocation 🎓",
      //               user: {
      //                 lastName: 'Amina',
      //                 firstName: 'Kamran'
      //               }
      //             },
      //           ]
      //         },
      //         {
      //           items: [
      //             {
      //               text: "How you doin'?",
      //               user: {
      //                 lastName: 'Tribianni',
      //                 firstName: 'Joey'
      //               }
      //             },
      //             {
      //               text: "That's what she said",
      //               user: {
      //                 lastName: 'Michael',
      //                 firstName: 'Scott'
      //               }
      //             },
      //           ]
      //         }
      //       ]
      //     },
      //     url: "http://google.ca"
      //     }
      //   }
      // },
      // {
      //   response: {
      //   venue: {
      //     id: "4ad4c05ef964a520d9f620e3",
      //     name: "Royal Ontario Museum",
      //     location: {
      //       lat: 43.668367065616046,
      //       lng: -79.3948129405877,
      //       address: "1 Shoreham Dr.",
      //       postalCode: "M3N 3A6",
      //       cc: "CA",
      //       city: "Toronto",
      //       state: "ON",
      //       country: "Canada",
      //     },
      //     tips: {
      //       groups: [
      //         {
      //           items: [
      //             {
      //               text: "PCL constructed this project under major time constraints, as the client had committed to hosting a major tennis competition.",
      //               user: {
      //                 lastName: 'PCL Construction'
      //               }
      //             },
      //             {
      //               text: "Nice place for the York convocation 🎓",
      //               user: {
      //                 lastName: 'Amina',
      //                 firstName: 'Kamran'
      //               }
      //             },
      //           ]
      //         },
      //         {
      //           items: [
      //             {
      //               text: "How you doin'?",
      //               user: {
      //                 lastName: 'Tribianni',
      //                 firstName: 'Joey'
      //               }
      //             },
      //             {
      //               text: "That's what she said",
      //               user: {
      //                 lastName: 'Michael',
      //                 firstName: 'Scott'
      //               }
      //             },
      //           ]
      //         }
      //       ]
      //     },
      //     url: "http://google.ca"
      //     }
      //   }
      // }
    ],
    result: ''
  }

// Making the API call to Foursquare for data prior to rendering the UI

  componentWillMount(){
    this.state.locations.map(location=>FoursquareAPI.get(location.id)
      .then(data=>this.state.places.push(data)))
      console.log(this.state.places)
  }

// Clicking a marker on Google Maps will prompt this function, which renders content information about the venue
// on the side bar

  clickMarker = (content) => {
    this.setState({
      result: content
    })
  }

// This function will call the selected results from it's grandchild component through its child component
// SearchBox.js

  fromSearchResults = (result) => {
    this.setState({
      result: result
    })
  }

  // This function prompts when a marker is clicked or selected from its Map.js component. The map will pan out
  // to recenter and rezoom to the targeted marker

  recenterMap = (selected) => {
    this.sel = selected
  }

  render() {
    const { places } = this.state
    return (
      <div className="App">
        <header className="app-header" role="banner">
          <h1>NEIGHBORHOOD MAP</h1>
        </header>
        <main className="app-main" role="main">
          <Map places={places} onClickMarker={this.clickMarker} recenter={this.sel}/>
          <div className="sidebar-container">
            <SearchBox places={places} searchResults={this.fromSearchResults} onClickCenter={this.recenterMap}/>

            {
            // The sidebar container renders information made from the Foursquare API call.
            // It first filters to see which venue is selected either from a search call or
            // by clicking the designated marker and displays information such as a photo of the venue,
            // address info, website, and tips & reviews from users on Foursquare.
            }

            <div className="contentinfo-container">
              <div className="contentinfo">
                {places.filter(place => place.response.venue.name === this.state.result).map(p => {
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
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
