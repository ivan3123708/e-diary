import * as React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { IStoreState, User } from '../types';
import * as userActions from '../actions/userActions';
import LoginModal from './LoginModal';

interface IProps extends RouteComponentProps<any> {
  user: User | null;
  fetchUser: () => void;
};

class Topbar extends React.Component<IProps, {}> {
  openModal = () => {
    const modal = document.getElementsByClassName('login-modal-container')[0];

    modal.classList.remove('modal-closed');
    modal.classList.add('modal-open');
  }

  onSubmitForm = () => {
    this.props.fetchUser();
    this.props.history.push('/home');
  }

  componentDidMount() {
    this.props.fetchUser();
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
          <a href="/auth/logout" className="nav-link">Logout</a>
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
      <div className="topbar">
        <LoginModal onSubmitForm={this.onSubmitForm} />
        <div className="left">
          <p className="title">E-Diary</p>
        </div>
        <div className="right">
          {!!this.props.user ? loggedUl : notLoggedUl}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state: IStoreState) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch: Dispatch<userActions.UserAction>) => ({
  fetchUser: () => dispatch(userActions.fetchUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Topbar));