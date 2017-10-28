import axios from 'axios';

var http = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 3000
});

export const FETCH_MOVIES = 'FETCH_MOVIES';

const setMovies = movies => {
  return {
    type: FETCH_MOVIES,
    movies
  };
}

export function fetch(type = "popular", page = 1) {
  return (dispatch) => {
    http.get(
      'movie/' + type,
      {
        params: {
          api_key: 'b7c058b14cadc627c604777ebe13e8dd',
          page: page
        }
      }
    )
    .then(function (response) {
      dispatch(setMovies(response.data.results));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
