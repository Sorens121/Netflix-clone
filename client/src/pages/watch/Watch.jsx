import { ArrowBackOutlined, LocationCity, Movie } from '@mui/icons-material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import "./watch.scss"

function Watch() {
  const location = useLocation()
  const movie = location.state.movie
  console.log(movie)
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackOutlined/>
            Home
        </div>
        <video className="video" autoPlay controls src={movie.video} />
    </div>
  );
}

export default Watch;

//https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=319&oauth2_token_id=57447761