import React, { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
// import UserService from '../../services/user-services';

// Validation
// Integrate with Formik as soon as logic has been implemented

const LoginForm = () => {
  const { user, setUser } = useContext(UserContext);

  const handleUserLogin = (e) => {
    e.preventDefault();
    const username = e.target['username'].value;
    const password = e.target['password'].value;

    const oldUser = {
      username,
      password,
    }

    setUser(oldUser);
  }

  useEffect(() => {
    // Instead of depending on state
    // Store username in local storage (if coming from signup)
    // So if page refreshes, the following logic will not run
    // Since user is now {}
    
    if(!user.email) {
      async function postOldUser() {
        try {
          // const response = await UserService.postOldUser(oldUser);
          // Push to previous page (if not coming from signup)
          console.log('postOldUser');
        }
        catch(error) {
          console.log(error);
        }
      }
      postOldUser();
    }
    console.log(user)
  })

  return (
    <form 
      onSubmit={(e) => handleUserLogin(e)}
    >

      <label
        htmlFor='username'
      >
        Username
      </label>
      <input
        id='username'
        type='text'
        defaultValue=
          {
            user.email
              ? user.email
              : ''
          }
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

export default LoginForm;