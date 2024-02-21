import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import Page from './pages/Page.js'
import HowTo from './pages/HowTo.js'
import Dashboard from './pages/Dashboard.js'

const App =()=>{
    return <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/login" exact element={<Login />}></Route>
        <Route path="/register" exact element={<Register />}></Route>
        <Route path="/page" exact element={<Page />}></Route>
        <Route path="/dashboard/" exact element={<Dashboard />}></Route>
        <Route path="/howto/" exact element={<HowTo />}></Route>


        </Routes>
        </BrowserRouter>
    </div>
}

export default App