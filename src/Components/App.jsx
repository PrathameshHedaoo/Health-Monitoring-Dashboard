import React from 'react'
import LandingPage from './LandingPage'
import Dashboard from './Dashboard'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <LandingPage/>
    <Routes>
    <Route path='/Dashboard' element = {<Dashboard />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App


