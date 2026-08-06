'use client';

import { useState } from 'react';

export default function RestaurantHeader({ name }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="restaurantHeader">
      <h2 className="restaurantName">{name}</h2>
      <button 
        className={`favoriteButton ${isLiked ? 'liked' : ''}`}
        onClick={() => setIsLiked(!isLiked)}
        aria-label={isLiked ? "Retirer des favoris" : "Ajouter aux favoris"}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill={isLiked ? "url(#gradient)" : "none"} 
          stroke="currentColor" 
          strokeWidth="2"
          className="heartIcon"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF79DA" />
              <stop offset="100%" stopColor="#9356DC" />
            </linearGradient>
          </defs>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </button>
    </div>
  );
} 