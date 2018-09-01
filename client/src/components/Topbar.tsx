import * as React from 'react';
import { NavLink } from 'react-router-dom';

const state = {
  userLogged: true
};

const Topbar = () => {
  return (
    <div className="topbar" >
      <div className="left" >
        <p className="title" >E-Diary</p>
      </div>
      <div className="right" >
        {state.userLogged ? 
          <ul>
            <li>
              <NavLink
                to="/home"
                className="nav-link"
                activeStyle={{ color: 'white' }}
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/my-diary"
                className="nav-link"
                activeStyle={{ color: 'white' }}
              >My Diary</NavLink>
            </li>
            <li>
              <a href="#" className="nav-link">Logout</a>
            </li>
          </ul>
          :
          <ul>
            <li>
              <a href="#" className="nav-link">Login</a>
            </li>
          </ul>
        }
      </div>
    </div>
  );
};

export default Topbar;