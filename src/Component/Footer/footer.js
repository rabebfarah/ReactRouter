import React from 'react'
import { FaTwitter,FaFacebook, FaGithub } from "react-icons/fa"
import {IconContext} from "react-icons"


const Footer = () => {
      return (
     
     <div  style={{display:'flex',flexWrap:'wrap',flex: '1', justifyContent: 'space-around', backgroundColor:'WHITE',marginTop:"140px"}}>
      <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>Twitter
            <FaTwitter />
      </IconContext.Provider> 

      <IconContext.Provider value={{ style: {fontSize: '30px', color: "rgb(0, 123, 255)"}}}>Facebook  
            < FaFacebook/>
      </IconContext.Provider> 
                              
      <IconContext.Provider value={{ style: {fontSize: '30px', color: "black"}}}>Github
            < FaGithub/>
      </IconContext.Provider>
</div>
                        
    
      )
}

export default Footer