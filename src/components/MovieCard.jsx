
import React, { useState } from 'react'

const onfavClick=()=>{
    alert("clicked")
}

const MovieCard = ({movie}) => {
  const [imageError, setImageError] = useState(false)

  const handleImageError = () => {
    setImageError(true)
  }

  const isValidUrl = movie.url && typeof movie.url === 'string' && movie.url.startsWith('http');

  return (
    <div className='movie-card' >
        {/* Movie poster with  like button on it */}
        <div className="movie-poster">
            {!imageError && isValidUrl ? (
              <img 
                src={movie.url} 
                alt={`${movie.title} poster`} 
                onError={handleImageError}
                loading="lazy"
              />
            ) : (
              <div className="movie-placeholder">
                <span className="placeholder-icon">🎬</span>
                <p className="placeholder-text">{movie.title}</p>
              </div>
            )}
            <div className="movie-overlay">
                <button type="button" className='fav-btn' onClick={onfavClick}>
                    <i className="fa-solid fa-heart" style={{color: "red"}}></i>
                </button>
            </div>
        </div>

        {/* Movie specific info below movie card */}

        <div className="movie-info">
            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default MovieCard
