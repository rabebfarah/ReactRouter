import React from "react"
import './moviecard.css'
import Rating from '../Rate/rating'
import { Link } from "react-router-dom";


const MoviesCard = ({movie}) => {
  return (
    
    <div className="container">
              <Link to={`/Movieinfo/${movie.id}`} style={{textDecoration: "none"}}>            

    <div className="movie">
      <div className="movie-rating">
      
        <Rating rating={movie.rating} />
      </div>
     
       <div className="movie-img">
        <img src={movie.image} alt="movie poster" />
      </div>
      <div className="text-movie-cont">
        <div className="mr-grid">
          <div className="col1">
            <h2>{movie.name}</h2>
            <ul className="movie-gen">
              <p>{movie.date}</p>
            </ul>
          </div>
        </div></div> 
      
        
      
    </div>
    </Link>

  </div>
);
};



 export default MoviesCard