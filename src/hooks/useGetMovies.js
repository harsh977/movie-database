import { useEffect, useState } from 'react';

const useGetMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://dummyapi.online/api/movies");

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setMovies(data);  // directly setting the data since it's an array
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies(); 
  }, []); 

  return { movies };
}

export default useGetMovies;
