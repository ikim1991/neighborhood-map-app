const initialState = {
  places: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        places: state.places.concat(action.payload)
      }
    default:
      return state;
  }
}
