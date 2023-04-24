import React from 'react'

import { Outlet, Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
     <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Navbar">Navbar</Link>
          </li>
         
        </ul>
      </nav>
    </div>
  )
}

export default Home
