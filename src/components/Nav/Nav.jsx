import React from 'react';
import s from './Nav.module.css';
import './Nav.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Nav = () => {

  const location = useLocation();
  console.log(location);
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={location.pathname==="/profile"? s.active : " " } >Profile</NavLink>
      </div>
      <div className={s.item} >
        <NavLink to="/messages" className={location.pathname==="/messages"? s.active : " "}> Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" className={location.pathname==="/news"? s.active : " "}> News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" className={location.pathname==="/music"? s.active : " "}> Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to= "/settings" className={location.pathname==="/settings"? s.active : " "}> Settings</NavLink>
      </div>
    </nav>
  );
}
export default Nav;