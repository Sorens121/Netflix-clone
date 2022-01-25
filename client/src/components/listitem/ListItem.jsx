import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material';
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import {Link} from "react-router-dom"
import "./listitem.scss"

export default function ListItem({index, item}){
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})
  
  useEffect(() => {
    let didCancel = false

    const getMovie = async () => {
      try{
        const res = await axios.get("/movies/find/" +item, {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWE2NWNhN2I4NjUzNDY1ZWRjOTU0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjk5NTE4NCwiZXhwIjoxNjQzNDI3MTg0fQ.CGKxMhC0GslezwnrRke_qyDKxkf23MTQS3r-rfXAUrs"
          }
        })

        if(!didCancel){
          setMovie(res.data)
        }
      } catch(error){
        console.log(error)
      }
    }
    getMovie()

    // useEffect cleanup code
    return() => {didCancel = true}
  }, [item])
  
  
  return (
    <Link to="/watch" state={{movie: movie}}>
      <div className= "listItem" 
         style={{left: isHovered && index * 225 -50 + index * 2.5}}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
        >
        <img src={movie.img}/>
          {isHovered && (
            <>
              <video src={movie.trailer} autoPlay={true} loop/>

              <div className="itemInfo">
                <div className="icons">
                  <PlayArrow className="icon"/>
                  <Add className="icon"/>
                  <ThumbUpAltOutlined className="icon"/>
                  <ThumbDownAltOutlined className="icon"/>
                </div>

                <div className="itemInfoTop">
                  <span>{movie.duration}</span>
                  <span className="limit">{movie.limit}</span>
                  <span>{movie.year}</span>
                </div>
                
                <div className="desc">
                  {movie.desc}
                </div>
                <div className="genre">{movie.genre}</div>
              </div>
            </>
          )}
      </div>
    </Link>
  );
}
