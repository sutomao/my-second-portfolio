import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <div className='header-name'>Mao Suto</div>
    
    <nav>
      <ul>
      <li>
        <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">about me</Link>
        </li>
        <li>
          <Link to="/study">study</Link>
        </li>
        <li>
          <Link to="/hobby">hobby</Link>
        </li>
      </ul>
    </nav>
    </header>
  )
}

export default Header;