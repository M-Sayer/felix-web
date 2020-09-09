import React, { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
// import AuthService from '../../services/auth-services';

// Validation
// Integrate with Formik as soon as logic has been implemented

const RegistrationForm = (props) => {
  const { user, setUser } = useContext(UserContext);

  const handleUserRegistration = (e) => {
    e.preventDefault();
    const username = e.target['username'].value;
    const email = e.target['email'].value;
    const password = e.target['password'].value;

    const newUser = {
      username,
      email,
      password,
    }

    setUser(newUser);
  }
  
  useEffect(() => {
    if(Object.keys(user).length) {
      async function postNewUser() {
        try {
          // const response = await AuthService.postNewUser(newUser);
          // Push to login page
          console.log('postNewUser');
        }
        catch(error) {
          console.log(error);
        }
      }
      postNewUser();
    }
  }, [user]);

  return (
    <form 
      onSubmit={(e) => handleUserRegistration(e)}
    >

      <label
        htmlFor='username'
      >
        Username
      </label>
      <input
        id='username'
        type='text'
      />

      <label
        htmlFor='email'
      >
        Email
      </label>
      <input
        id='email'
        type='text'
      />

      <label
        htmlFor='password'
      >
        Password
      </label>
      <input
        id='password'
        type='text' // Change to type='password'
      />

      <button
        type='submit'
      >
        Submit
      </button>

    </form>
  )
}

export default RegistrationForm;