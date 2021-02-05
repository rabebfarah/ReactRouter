import React,{useEffect,useState} from 'react'
import './movieinfo.css'
import { useHistory } from "react-router-dom";
import {FaBackward} from "react-icons/fa"


function Movieinfo({ match, movies }) {
    const history = useHistory(); 
    const [movie, setMovie] = useState({});
    useEffect(() => {setMovie(movies.find((movie)=> movie.id === +match.params.id))}, [])

      return (
       
      <div >
            <button onClick={() => {history.goBack()}} style={{marginRight:"1100px", marginBottom:"-20px",width:"50px",height:"50px" ,backgroundColor:"transparent",color:"RED"}}><FaBackward/></button>
            <div className="movieimg">
             <div >
             <img   style={{width:"150px",height:"100px",border:"1px solid black",marginLeft:"290px",marginRight:"10px"}}src={movie.image} alt="img" />
             </div>
             <h1 style={{width:"200px", color:"red"}}>{movie.name}</h1>
             <div style={{fontSize:"15px",color:"white",height:"100px",border:"1px solid black",marginLeft:"10px"}} > </div>
              <h3 style={{width:"700px",textDecoration:"none",color:"white"}} >{movie.description}</h3>
            </div>
            <div className="trailer">
            <iframe width="1100px" height="350px" src={movie.trailer} style={{marginLeft:'100px',marginTop:'100px'}}> </iframe>
            
            </div>

           
      </div>                                               
      
      )
      }

export default Movieinfo