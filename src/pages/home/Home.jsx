import React from 'react'


import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Featured from '../../components/navbar/featured/Featured'
import List from '../../components/list/List'


// rafce - react arrow function component export
const Home = () => {
  return (
    <div className='home'>
        
        <Navbar/>
        <Featured/>
        <List/>
        <List/>
        <List/>
        <List/>
        </div>
  )
}

export default Home


