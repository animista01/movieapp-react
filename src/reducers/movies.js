import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/movies'

const movies = {
  movie: {
    videos: [],
    genres: [],
    keywords: {
      keywords: []
    }
  },
  movies: {
    results: []
  }
}
export default (state = movies, action) => {
  const { movies } = action;
  const { movie } = action;

  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies,
      }
    case FETCH_MOVIE:
      return {
        ...state,
        movie,
      }
    default:
      return state;
  }
}
