import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import AuthService from '../../services/auth-service';
import './LoginForm.css'

// Validation
// Integrate with Formik as soon as logic has been implemented

class LoginForm extends Component {
  static contextType = UserContext;

  static defaultProps = {
    onLoginSuccess: () => {}
  }

  state = {
    error: null,
  }

  async handleUserLogin(e) {
    e.preventDefault();
    const {
      username,
      password,
    } = e.target;

    const oldUser = {
      username: username.value,
      password: password.value,
    }

    username.value = '';
    password.value = '';

    this.setState({error: null});

    try {
      const { authToken } = await AuthService.postOldUser(oldUser);
      this.context.handleUserLog(authToken);
      this.props.onLoginSuccess();
    }
    catch(error) {
      console.log(error);
      this.setState({...error});
    }
  }
    
  render() {
    // const { user } = this.context;

    return (
        <form
        clasname='LoginForm'
          onSubmit={(e) => 
            this.handleUserLogin(e)}
        >
    
          <label
            htmlFor='username'
          >
            Username
          </label>
          <input
            autoComplete='username'
            id='username'
            type='text'
          />
    
          <label
            htmlFor='password'
          >
            Password
          </label>
          <input
            autoComplete='current-password'
            id='password'
            type='password'
          />
    
          <button
            className='submit-button'
            type='submit'
          >
            Submit
          </button>
        </form>
    );
  }
}

export default LoginForm;