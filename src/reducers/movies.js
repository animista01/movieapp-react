import { FETCH_MOVIES } from '../actions/movies'

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.movies;
    default:
      return state;
  }
}
