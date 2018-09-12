const initialState = {
  locations: [
    {
      id: "4ad4c064f964a52074f820e3",
      name: "Aviva Centre",
      position: {
        lat: 43.7716,
        lng: -79.5121
      }
    },
    {
      id: "4b155081f964a520b4b023e3",
      name: "Scotiabank Arena",
      position: {
        lat: 43.6435,
        lng: -79.3791
      }
    },
    {
      id: "4ad4c062f964a520f3f720e3",
      name: "BMO Field",
      position: {
        lat: 43.6332,
        lng: -79.4186
      }
    },
    {
      id: "4ad4c061f964a520adf720e3",
      name: "Rogers Centre",
      position: {
        lat: 43.6414,
        lng: -79.3894
      }
    },
    {
      id: "4ad4c05ef964a520d9f620e3",
      name: "Royal Ontario Museum",
      position: {
        lat: 43.6677,
        lng: -79.3948
      }
    },
  ],
  mapProps: {
    center: {lat: 43.6629, lng: -79.3957},
    zoom: 12,
    width: '100%',
    height: '100vh'
  },
  query:'',
  selected: '',
  buttonVisibilityFilter: {
    visibility: false,
    buttonText: 'Show All'
  }
}

const mapReducer = (state = initialState, action) => {

  switch(action.type) {

    // Reducer that updates the search bar results. The search results are filtered based on the query results

    case "UPDATE_QUERY":
      return {
        ...state,
        query: action.payload.query
      }

    // Reducer that renders different venue information based on which marker or search bar result is selected

    case "SET_SELECT":
      return {
        ...state,
        selected: action.payload,
        query: '',
        buttonVisibilityFilter: {
          visibility: false,
          buttonText: 'Show All'
        }
    }

    // Reducer that toggles the search results between Show All and Hide All. Show All will display all venues that
    // are currently being fetched from the Foursquare API

    case "TOGGLE_BUTTON":

      action.payload.preventDefault()

      if (state.buttonVisibilityFilter.visibility === false) {
        return {
          ...state,
          buttonVisibilityFilter: {
            visibility: true,
            buttonText: 'Hide All'
          }
        }
      } else {
        return {
          ...state,
          buttonVisibilityFilter: {
            visibility: false,
            buttonText: 'Show All'
          }
        }
      }

    default:
      return state;
  }

}

export default mapReducer
