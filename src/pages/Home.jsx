import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const movies = [
    {id: 1, title: "Venom: Let There Be Carnage", release_date: "2021", url: "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"},
    {id: 2, title: "Ex Machina", release_date: "2014", url: "/ExMachina.png"},
    {id: 3, title: "The Avengers", release_date: "2012", url: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"},
    {id: 4, title: "Avengers: Endgame", release_date: "2019", url: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"},
    {id: 5, title: "Mad Max: Fury Road", release_date: "2015", url: "/MadMax.png"},
    {id: 6, title: "Inception", release_date: "2010", url: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"},
    {id: 7, title: "Joker", release_date: "2019", url: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"},
    {id: 8, title: "Interstellar", release_date: "2014", url: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"},
    {id: 9, title: "The Dark Knight", release_date: "2008", url: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
    {id: 10, title: "Oppenheimer", release_date: "2023", url: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"},
    {id: 11, title: "Mission: Impossible 7", release_date: "2023", url: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg"},
    {id: 12, title: "Guardians of the Galaxy 3", release_date: "2023", url: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"},
    {id: 13, title: "Deadpool", release_date: "2016", url: "https://image.tmdb.org/t/p/w500/inVq3FRqcYIRl2la8iZikYYxFNR.jpg"},
    {id: 14, title: "Ant-Man 3", release_date: "2023", url: "https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"},
    {id: 15, title: "Shazam 2", release_date: "2023", url: "https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"},
    {id: 16, title: "The Super Mario Bros", release_date: "2023", url: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"},
    {id: 17, title: "John Wick 4", release_date: "2023", url: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHc0dHI.jpg"},
    {id: 18, title: "Creed 3", release_date: "2023", url: "https://image.tmdb.org/t/p/w500/cvsXj3V9DkD6toWtSk6kqrsvupT.jpg"},
    {id: 19, title: "Spider-Man: No Way Home", release_date: "2021", url: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"},
    {id: 20, title: "Fast X", release_date: "2023", url: "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"},
    {id: 21, title: "Top Gun: Maverick", release_date: "2022", url: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"},
    {id: 22, title: "The Batman", release_date: "2022", url: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"},
    {id: 23, title: "Dune", release_date: "2021", url: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"},
    {id: 24, title: "The Little Mermaid", release_date: "2023", url: "https://image.tmdb.org/t/p/w500/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg"},
    {id: 25, title: "Shang-Chi", release_date: "2021", url: "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"},
    {id: 26, title: "Eternals", release_date: "2021", url: "https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg"},
    {id: 27, title: "Doctor Strange 2", release_date: "2022", url: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"},
    {id: 28, title: "Thor: Love and Thunder", release_date: "2022", url: "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"},
    {id: 29, title: "Black Adam", release_date: "2022", url: "https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"},
    {id: 30, title: "Avatar: The Way of Water", release_date: "2022", url: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"},
  ];

  const [searchQuery,setsearchQuery]=useState("")

  const handleSearch=(e)=>{

    e.preventDefault()
    alert(searchQuery)
    setsearchQuery('')

  }

  return (
    <div className='home'>

      <form action="#" onSubmit={handleSearch} className="search-form">
        <input 
        type="text" 
        placeholder='Search FilmFlux movies...' 
        className='search-input'
        value={searchQuery}

        onChange={(e)=>{
          setsearchQuery(e.target.value)
        }}

        />


        <button type='submit'>Submit</button>


      </form>

      <div className="movies-grid">
        {movies.map(
          (movie)=>
          
          movie.title.toLowerCase().startsWith(searchQuery) &&
          (<MovieCard key={movie.id} movie={movie} />)
          

            // <MovieCard key={movie.id} movie={movie} />
      
        )}
      </div>

      
      
    </div>
  )
}

export default Home
