import React from 'react';
import image from '../assets/images/image.jpg';
const Movie = ({ movie }) => {

  return (
    <div className="movie-card">
      <img src={image} alt={movie.movie} className="movie-image" />
      <div className="movie-details">
        <h2 className="movie-title">{movie.movie}</h2>
        <p className="movie-rating">Rating: {movie.rating}</p>
        <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer" className="movie-link">
          View on IMDb
        </a>
      </div>
    </div>
  );
};

export default Movie;
