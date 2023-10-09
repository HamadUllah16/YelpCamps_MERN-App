import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Add from '../pages/Add'
import Edit from '../pages/Edit'

function AppRoutes() {
  const server = "https://yelp-camps-mern-app-server.vercel.app/"
  return (
    <div className='main'>
        <Routes>
            <Route path='/' element={<Home server={server} />} />
            <Route path='/add' element={<Add server={server} />} />
            <Route path='/edit/:id' element={<Edit server={server} />}/>
        </Routes>
    </div>
  )
}
export default AppRoutes
