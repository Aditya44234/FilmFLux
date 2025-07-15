


/*
// Example logic to fetch movies from TMDB API (The Movie Database):
//
// const fetchMoviesFromTMDB = async () => {
//   const apiKey = 'YOUR_TMDB_API_KEY';
//   const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error('Failed to fetch movies from TMDB');
//     const data = await response.json();
//     // data.results is an array of movie objects
//     // You may want to map them to your own format:
//     const movies = data.results.map(movie => ({
//       id: movie.id,
//       title: movie.title,
//       release_date: movie.release_date,
//       url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//     }));
//     setMovies(movies);
//   } catch (err) {
//     setError('Error loading movies from TMDB');
//   } finally {
//     setLoading(false);
//   }
// };



 
 */

import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
// import { searchMovies } from '../services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setsearchQuery] = useState("");


  //Fetch movies function to fetch movies from the api
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/movies');
        if (!response.ok) throw new Error('Failed to fetch movies');
        const data = await response.json();
        setMovies(data);
      } catch (err) {
        setError('Error loading movies');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);


  //Search movies function to search movies from the api
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    if (loading) return;

    if(searchQuery===""){
      setMovies(movies)
      setError("No movies found")
      return
    }

    setLoading(true);


    try {
      const response = await fetch(`http://localhost:5000/api/movies/search?q=${encodeURIComponent(searchQuery)}`);
      if (!response.ok) throw new Error('Failed to search movies');
      const searchResults = await response.json();
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log("Error");
      setError("Error: Failed to search movie...");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='home'>
      <form action="#" onSubmit={handleSearch} className="search-form">
        <input 
        type="text" 
          placeholder='Search FilmFlux movies...'
        className='search-input'
        value={searchQuery}
          onChange={(e) => {
          setsearchQuery(e.target.value)
        }}
        />
        <button type='submit'>Submit</button>
      </form>
      <div className="movies-grid">
        {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
