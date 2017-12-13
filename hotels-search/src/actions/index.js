import fetch from 'isomorphic-fetch'

export const HOTELS_REQUEST = 'HOTELS_REQUEST';
export const HOTELS_SUCCESS = 'HOTELS_SUCCESS';
export const HOTELS_FAILED = 'HOTELS_FAILED';

function requestHotels() {
  return {
    type: HOTELS_REQUEST
  }
}

function requestHotelsSuccess(items) {
  return {
    type: HOTELS_SUCCESS,
    items
  }
}

function requestHotelsFailed(error) {
  return {
    type: HOTELS_FAILED,
    error
  }
}

export function fetchHotels(search) {
  return (dispatch) => {
    dispatch(requestHotels());
    return fetch('http://www.omdbapi.com/?s='+search+'&apikey=bda8345')
      .then(response => response.json())
      .then(json => {
        if(json.error) {
          return dispatch(requestHotelsFailed(json.error))
        }
        else {
          return dispatch(requestHotelsSuccess(json.Search))
        }
      })
      .catch(error => dispatch(requestHotelsFailed(error)))
  }
}

