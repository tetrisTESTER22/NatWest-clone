import './Header.css'
import NotificationIcon from '../../icons/NotificationIcon'
import SearchIcon from '../../icons/SearchIcon'
import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <div className="avatar">EF</div>
      </div>
      <div className="header-right">
        <button className="icon-btn">
          <NotificationIcon />
        </button>
        <button className="icon-btn">
          <SearchIcon />
        </button>
      </div>
    </div>
  )
}

export {}
