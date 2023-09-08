import { useState, useEffect } from "react";

const MoviesFetch = (movie) => {
  const [moviesData, setMoviesData] = useState([]);
  const [error, setError] = useState(null);
  const url = `http://localhost:`;
  const port = `8080`;
  const endpoint = `/movies`;

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(url+port+endpoint)
        if (!res.ok) {
          throw new Error('Unable to fetch movies!');
        }
        const movies = await res.json();
        setMoviesData(movies);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError(error.message);
      }
    }
    fetchMovies();
  }, [url, port, endpoint]);
  return { moviesData, error };
}

export default MoviesFetch;