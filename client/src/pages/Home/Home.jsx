import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/features/Featured';
import List from "../../components/lists/List"
import axios from "axios"
import "./home.scss"

const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    let didCancel = false

    const getRandomLists = async () => {
      try {
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
        {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWE2NWNhN2I4NjUzNDY1ZWRjOTU0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mjk5NTE4NCwiZXhwIjoxNjQzNDI3MTg0fQ.CGKxMhC0GslezwnrRke_qyDKxkf23MTQS3r-rfXAUrs"
          }
        })
        
        if(!didCancel){
          setLists(res.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    getRandomLists()

    return() => {didCancel = true}
  },[type, genre])

  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type}/>
        {lists.map((list) => (
          <List list={list} key={list._id}/>

        ))}
    </div>
  );
};

export default Home;
