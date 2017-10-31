import axios from 'axios';

var http = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 3000
});

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';

const setMovies = movies => {
  return {
    type: FETCH_MOVIES,
    movies
  };
}

const setMovie = movie => {
  return {
    type: FETCH_MOVIE,
    movie
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
      dispatch(setMovies(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export function fetchMovie(movieID) {
  return (dispatch) => {
    http.get(
      'movie/' + movieID,
      {
        params: {
          api_key: 'b7c058b14cadc627c604777ebe13e8dd',
          append_to_response: 'credits,keywords,videos,reviews,similar,images,changes'
        }
      }
    )
    .then(function (response) {
      dispatch(setMovie(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export function searchMovie(query) {
  return (dispatch) => {
    http.get(
      'search/movie',
      {
        params: {
          api_key: 'b7c058b14cadc627c604777ebe13e8dd',
          query: query
        }
      }
    )
    .then(function (response) {
      dispatch(setMovies(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
