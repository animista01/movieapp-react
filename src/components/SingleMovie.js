import React from 'react';

const SingleMovie = (props) => {
	let movie = props.movie;
  let year = new Date(movie.release_date);
  let vote = movie.vote_average * 10;
  let duration = movie.runtime / 60;
  function getFullPath(imageUrl){
    return "https://image.tmdb.org/t/p/w500/" + imageUrl;
  }
  function intToCurrency(number) {
    if (number) {
      return number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    }
  }
	return(
		<div>
		 	<h1>{movie.title}({year.getFullYear()})</h1>
		  <a href={'/movie/' + movie.id}>
		    <img src={getFullPath(movie.poster_path)} />
		  </a>
		  <br />
		  <span><b>Overview:</b> {movie.overview}</span>
		  <p><b>Votes:</b> {vote}%</p>
		  <p><b>Lang:</b> {movie.original_language}</p>
		  <span><b>Genres:</b>
		    {movie.genres.map(genre =>
		      <p key={genre.id}>{genre.name}</p>
		    )}
		  </span>
		  <p><b>Duration:</b> {duration}</p>
		  <br />
		  <span><b>Keywords:</b>
		    {movie.keywords.keywords.map(keyword =>
		      <p key={keyword.id}>{keyword.name}</p>
		    )}
		  </span>
		  <br />
		  <p><b>Status:</b> {movie.status}</p>
		  <p><b>Homepage:</b> <a href={movie.homepage}>Homepage</a></p>
		  <p><b>Budget:</b> ${intToCurrency(movie.budget)}</p>
		  <p><b>Revenue:</b> ${intToCurrency(movie.revenue)}</p>
		</div>
	);
}

export default SingleMovie;
