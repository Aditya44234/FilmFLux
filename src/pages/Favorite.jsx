import React from 'react'
import { useNavigate } from 'react-router-dom'

const Favorite = () => {
  const navigate = useNavigate()
  return (
    <div className="favorites-container">
      <div className="favorites-content">
        <div className="favorites-icon">
          <span className="heart-icon">💔</span>
        </div>
        <h1 className="favorites-title">No Favorites Yet</h1>
        <p className="favorites-description">
          Start building your FilmFlux collection! Click the heart icon on any movie to add it to your favorites.
        </p>
        <div className="favorites-cta">
          <button className="browse-btn" onClick={()=>{navigate('/')}}>Explore FilmFlux</button>
        </div>
      </div>
    </div>
  )
}

export default Favorite
