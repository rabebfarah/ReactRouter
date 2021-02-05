import React, {useState} from "react"
import "./App.css"
import MAIN from './Component/Main/main'
import { Mdata } from "./Component/Data/data" 
import Navigation from './Component/Header/header'
import Footerr from './Component/Footer/footer'
import Movieinfo from "./Component/Movieinfo/movieinfo"
import { Route, Switch } from "react-router-dom";
//import infoContact from './Component/CONTACT'
//import  infoPrice from './Component/PRINCING'




function App() {
  const [movies, setMovies] = useState(Mdata);
  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState(0);
  const AddNewMovie = (x) => {
    setMovies([...movies, x]);
  };
  return (
    <div className="App">
     
      <Navigation
        setSearchName={setSearchName}
        setSearchRate={setSearchRate}
        searchRate={searchRate}
      />
    
      <Route  path="/Movieinfo/:id" render={(props)=>(<Movieinfo {...props} movies={movies}/>)}/>
      <Route exact path="/">
      <MAIN className="star"
        movies={
          (searchName || searchRate)
            ? movies.filter(
                (el) =>
                  el.name
                    .toLowerCase()
                    .includes(searchName.toLowerCase()
                    .trim()) && el.rating >= searchRate
              )
            : movies
        }
        AddNewMovie={AddNewMovie}
        
      /> 
    <Footerr/>
    </Route>
    </div>
   
  );
}

export default App;
