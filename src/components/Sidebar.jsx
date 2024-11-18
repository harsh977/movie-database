import React, { useState } from 'react';

const Sidebar = ({ setFilters }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    setFilters((prev) => ({ ...prev, rating: e.target.value }));
  };

  return (
    <div className="sidebar">
      <h3>Filter Movies</h3>
      <div className="filter-group">
        <label htmlFor="rating">Rating: </label>
        <input
          type="number"
          id="rating"
          min="0"
          max="10"
          value={rating}
          onChange={handleRatingChange}
          className="filter-input"
        />
      </div>
    </div>
  );
};

export default Sidebar;
