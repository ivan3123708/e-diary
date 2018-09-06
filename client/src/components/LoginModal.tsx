import * as React from 'react';
import axios, { AxiosResponse } from 'axios';

interface State {
  mode: string;
  error: string | null;
}

class LoginModal extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'login',
      error: null
    }
  }

  registerUser = (e) => {
    e.preventDefault();

    const newUser = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      passwordRepeat: e.target.passwordRepeat.value
    };

    axios.post('/auth/register', newUser)
      .then((res: AxiosResponse) => {
        if (res.data !== 'OK') {
          this.setState({ error: res.data[0].msg });
        } else {
          this.closeModal();
        }
      });
  }

  loginUser = (e) => {
    e.preventDefault();

    const user = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    axios.post('/auth/login', user)
      .then((res: AxiosResponse) => {
        if (res.data !== 'OK') {
          this.setState({ error: 'Invalid username or password' });
        } else {
          this.closeModal();
        }
      });
  }

  toggleMode = (mode: string) => {
    this.setState({ mode });
  }

  closeModal = () => {
    const modal = document.getElementsByClassName('login-modal-container')[0];

    modal.classList.remove('modal-open');
    modal.classList.add('modal-closed');

    this.setState({ mode: 'login' });
  }

  render() {
    const login = (
      <div className="form-container">
        <h3>Login</h3>
        <p className="error">{this.state.error}</p>
        <form onSubmit={this.loginUser}>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button id="btn-login" type="submit">Login</button>
          <button id="btn-cancel" onClick={this.closeModal} >Cancel</button>
          <p>Don't have an account yet? <span onClick={() => this.toggleMode('register')}>Register</span></p>
        </form>
      </div>
    );

    const register = (
      <div className="form-container">
        <h3>Register</h3>
        <p className="error">{this.state.error}</p>
        <form onSubmit={this.registerUser}>
          <input type="text" name="username" placeholder="Username" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="password" name="passwordRepeat" placeholder="Repeat Password" />
          <button id="btn-register" type="submit">Register</button>
          <button id="btn-cancel"  onClick={this.closeModal}>Cancel</button>
          <p>Already have an account?  <span onClick={() => this.toggleMode('login')}>Login</span></p>
        </form>
      </div>
    );

    return (
      <div className="login-modal-container modal-closed">
        <div className="login-modal">
          {this.state.mode === 'login' ? login : register}
        </div>
      </div>
    );
  }
};

export default LoginModal;