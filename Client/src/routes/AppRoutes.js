import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Add from '../pages/Add'
import Edit from '../pages/Edit'

function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/add' element={<Add />} />
            <Route path='/edit/:id' element={<Edit />}/>
        </Routes>
    </div>
  )
}
export default AppRoutes
