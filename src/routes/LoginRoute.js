import React, { Component } from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

class LoginRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    }
  }

  onLogSuccess = () => {
    const { history } = this.props;
    history.push('/dashboard');
  }
  // Redirect logic here

  render() {
    return (
      <>
        <LoginForm
          onLogSuccess={this.onLogSuccess} />
      </>
    );
  }
}

export default LoginRoute;