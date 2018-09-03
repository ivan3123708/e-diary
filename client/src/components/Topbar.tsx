import * as React from 'react';
import { NavLink } from 'react-router-dom';
import LoginModal from './LoginModal';

interface State {
  userLogged: Boolean;
}

class Topbar extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      userLogged: false
    }
  }

  openModal = () => {
    const modal = document.getElementsByClassName('login-modal-container')[0];

    modal.classList.remove('modal-closed');
    modal.classList.add('modal-open');
  }

  render() {
    const loggedUl = (
      <ul>
        <li>
          <NavLink
            to="/home"
            className="nav-link"
            activeStyle={{ color: '#FF4081' }}
          >Home</NavLink>
        </li>
        <li>
          <NavLink
            to="/my-diary"
            className="nav-link"
            activeStyle={{ color: '#FF4081' }}
          >My Diary</NavLink>
        </li>
        <li>
          <a href="#" className="nav-link">Logout</a>
        </li>
      </ul>
    );

    const notLoggedUl = (
      <ul>
        <li>
          <a href="#" onClick={this.openModal} className="nav-link">Login</a>
        </li>
      </ul>
    );

    return (
      <div className="topbar" >
        <LoginModal />
        <div className="left" >
          <p className="title" >E-Diary</p>
        </div>
        <div className="right" >
          {this.state.userLogged ? loggedUl : notLoggedUl}
        </div>
      </div>
    );
  }
};

export default Topbar;