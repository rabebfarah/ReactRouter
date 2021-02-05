
import React from "react"
import MoviesCard from './MovieCard/moviecard'
import AddMovie from '../Header/Adding/add'



const MAIN = ({movies,AddNewMovie}) => {
  return (
  
   <div style={{
      display: "flex",
      flexwrap:" wrap",
      height: "570px",
      justifycontent: "spacebetween",
      margin: "50px",
   }}>
      
      {movies.map((el, i) => (<MoviesCard movie={el} key={i}/>))}
     
    <AddMovie AddNewMovie={AddNewMovie} /> 
    </div>
  );
};
export default MAIN;   

