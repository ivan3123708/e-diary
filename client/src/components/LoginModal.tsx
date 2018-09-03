import * as React from 'react';

interface State {
  mode: string;
}

class LoginModal extends React.Component<{}, State> {
  constructor(props) {
    super(props);

    this.state = {
      mode: 'login'
    }
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
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button id="btn-login">Login</button>
          <button id="btn-cancel" onClick={this.closeModal} >Cancel</button>
          <p>Don't have an account yet? <span onClick={() => this.toggleMode('register')}>Register</span></p>
        </form>
      </div>
    );

    const register = (
      <div className="form-container">
        <h3>Register</h3>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Repeat Password" />
          <button id="btn-register">Register</button>
          <button id="btn-cancel" onClick={this.closeModal} >Cancel</button>
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