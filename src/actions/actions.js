import * as FoursquareAPI from '../Components/FoursquareAPI'

// Fetches data from Foursquare and dispatches the data into the state without mutating the data

export const fetchData = (id) => dispatch => {
  FoursquareAPI.get(id).then(data => dispatch({
    type: 'FETCH_DATA',
    payload: data
  }))
}
