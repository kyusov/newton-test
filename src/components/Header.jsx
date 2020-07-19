import React from 'react'
import { Link } from 'react-router-dom'

function Header({ menuItems }) {
  return (
    <div className="header">
      <div className="container">
        {menuItems.map((e, i) => (
          <Link key={`${e.name}__${i}`} to={e.link}>
            <div className="header__item">{e.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Header
