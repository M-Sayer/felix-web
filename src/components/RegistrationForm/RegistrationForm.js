import React, { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
// import AuthService from '../../services/auth-services';

import './RegistrationForm.css';

// Validation
// Integrate with Formik as soon as logic has been implemented

const RegistrationForm = (props) => {
  const { user, setUser } = useContext(UserContext);

  const handleUserRegistration = (e) => {
    e.preventDefault();
    const first_name = e.target['first_name'].value;
    const last_name = e.target['last_name'].value;
    const username = e.target['username'].value;
    const email = e.target['email'].value;
    const password = e.target['password'].value;

    const newUser = {
      first_name,
      last_name,
      username,
      email,
      password,
    }

    //setUser(newUser);
    console.log('submit button works');
    console.log(newUser);
  }
  
  useEffect(() => {
    if(Object.keys(user).length) {
      async function postNewUser() {
        try {
          // const response = await UserService.postNewUser(newUser);
          // Push to login page
          //console.log('postNewUser');
        }
        catch(error) {
          //console.log(error);
        }
      }
      postNewUser();
    }
    //console.log(user);
  }, [user]);

  return (
    <form 
      className='RegistrationForm'
      onSubmit={(e) => handleUserRegistration(e)}
    >

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
  )
}

export default RegistrationForm;