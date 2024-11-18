import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Movie from './Movie';
import useGetMovies from '../hooks/useGetMovies';

const Movies = () => {
  const { movies } = useGetMovies();
  const [filters, setFilters] = useState({
    rating: 0,
  });

  const filteredMovies = movies.filter((movie) => movie.rating >= filters.rating);

  return (
    <div className="movies-container">
      <Sidebar setFilters={setFilters} />
      <div className="movies-list">
        {filteredMovies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
