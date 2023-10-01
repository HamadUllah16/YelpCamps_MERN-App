import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Add from '../pages/Add'
import Edit from '../pages/Edit'

function AppRoutes() {
  const api = "https://yelp-camps-mern-app-server.vercel.app/"
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home api={api} />} />
            <Route path='/add' element={<Add api={api} />} />
            <Route path='/edit/:id' element={<Edit api={api} />}/>
        </Routes>
    </div>
  )
}
export default AppRoutes
