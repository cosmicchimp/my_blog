import { useState } from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import Login from "./pages/Login"

import './App.css'

function App() {
  const [count, setCount] = useState(0)
const projects = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <div className="homepageWrapper">
      
      <header className="header">
        <div className="titleBox"><h1 className="title">blog.log()</h1></div><div className="linkBox"><a><Link to='/login'><h2>Login</h2></Link></a><a href=""><Link><h2>Latest</h2></Link></a></div>
      </header>

      <div className="projectContainer">
        {projects.map((num => (
          <div key={num} className="projectBox"><div className="projectImage"></div><p className="descriptionText"></p><div className="projectDescription"></div></div>
        )))}
      </div>
    </div>
  )
}

export default App
