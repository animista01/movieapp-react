import React from 'react';

const Movie = ({movie}) => {
  function getFullPath(imageUrl){
    return "https://image.tmdb.org/t/p/w500/" + imageUrl;
  }
  return(
    <li>
      <a href={'/movie/' + movie.id}>
        <img src={getFullPath(movie.poster_path)} />
      </a>
      <p>{movie.vote_average}</p>
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
    </li>
  )
}

export default Movie;
