import { InfoOutlined, PlayArrow } from '@mui/icons-material';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./featured.scss"

const Featured = ({type}) => {
  const [content, setContent] = useState({})

  useEffect(() => {
    let isDismount = false

    const getRandomContent = async() => {
      try{
        const res = await axios.get(`/movies/random?type=${type}`,{
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWE2NWNhN2I4NjUzNDY1ZWRjOTU0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjk5NTE4NCwiZXhwIjoxNjQzNDI3MTg0fQ.CGKxMhC0GslezwnrRke_qyDKxkf23MTQS3r-rfXAUrs"
          }
        })
        
        if(!isDismount){
          setContent(res.data[0])
        }
      } catch(error){
        console.log(error)
      }
    }
    getRandomContent()

    return () => {isDismount = true}
  }, [type])

  //console.log(content)

  return (
    <div className='featured'>
      {type && (
        <div className="category">
          <div className="category">
            <span>{type === "movies" ? "Movies" : "Series"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        </div>
      )}
      <img src={content.img}  alt="" />
    
      <div className="info">
        <img src={content.imgTitle} alt="" />
      
        <span className="desc">
          {content.desc}
        </span>

        <div className="buttons">
          <button className="play">
            <PlayArrow/>
            <span>Play</span>
          </button>
          <button className="moreinfo">
            <InfoOutlined/>
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>);
};

export default Featured;
