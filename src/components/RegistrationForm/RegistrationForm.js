import React from 'react';
import AuthService from '../../services/auth-service';
import UserContext from '../../contexts/UserContext';
import './RegistrationForm.css';

// Code for RegistrationForm is working...
class RegistrationForm extends React.Component {
  static contextType = UserContext;

  static defaultProps = {
    onRegSuccess: () => {},
  }

  state = {
    error: null
  } // Any errors with registration will display on page

  handleUserRegistration = async (e) => {
    e.preventDefault();

    const {
      first_name,
      last_name,
      username,
      email,
      password } = e.target;

    const newUser = {
      first_name: first_name.value,
      last_name: last_name.value,
      username: username.value,
      email: email.value,
      password: password.value        
    }

    first_name.value = '';
    last_name.value = '';
    username.value = '';
    email.value = '';
    password.value = '';

    this.setState({error: null}) // Any errors with registration will display on page

    try {
      const { authToken } = await AuthService.postNewUser(newUser);
      this.context.handleUserLog(authToken);
      this.props.onRegSuccess();
    }
    catch(error) {
      // Any errors with registration will display on page
      this.setState({...error});

      // Alternatively, throws an 'alert' for errors in registration submission
      // alert(res.error) 
    }
  }

  render() {
    const {error} = this.state

    return (
      <>
        <form 
          className='RegistrationForm'
          onSubmit={this.handleUserRegistration}
        >
          <div role='alert'>
            {error && <p className='error-alert'>{error}</p>}
          </div>

          <label
            htmlFor='first_name'
          >
            First Name
          </label>
          <input
            id='first_name'
            type='text'
            required
          />
      
          <label
            htmlFor='last_name'
          >
            Last Name
          </label>
          <input
            id='last_name'
            type='text'
            required
          />
      
          <label
            htmlFor='username'
          >
            Username
          </label>
          <input
            id='username'
            type='text'
            required
          />
      
          <label
            htmlFor='email'
          >
            Email
          </label>
          <input
            id='email'
            type='text'
            required
          />
      
          <label
            htmlFor='password'
          >
            Password
          </label>
          <input
            id='password'
            type='password'
            required
          />
      
          <button
            className='submit-button'
            type='submit'
          >
            Submit
          </button>
        </form>

        <button
          onClick={() =>
            this.props.history.push('/login')
          }
        >
          Already have an account? Login
        </button>
      </>
    )
  }   
}

export default RegistrationForm;