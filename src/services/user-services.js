import config from '../config';

const UserService = {

  // Temporary names
  // Transform to async-await

  postUserSignupCreds(signupCredentials) {

    // Expected input: signupCredentials = {
    //   username: '',
    //   password: '',
    //   email: '',
    // }

    // Expected output: JWT

    const settings = {
      'method': 'POST',
      'headers': {
        'Content-Type' : 'application/json'
      },
      'body': JSON.stringify(signupCredentials)
    }

    return fetch(`${config.API_ENDPOINT}/users/register`, settings)
      .then(response => {
        if(!response.ok) {
          return response.json().then(e => Promise.reject(e));
        }
        return response.json();
      })
  },

  // Login

  postUserLoginCreds(loginCredentials) {

    // Expected input: signupCredentials = {
    //   username: '',
    //   password: '',
    // }

    // Expected output: JWT

    const settings = {
      'method': 'POST',
      'headers': {
        'Content-Type' : 'application/json'
      },
      'body': JSON.stringify(loginCredentials)
    }

    return fetch(`${config.API_ENDPOINT}/users/login`, settings)
      .then(response => {
        if(!response.ok) {
          return response.json().then(e => Promise.reject(e));
        }
        return response.json();
    })
  }
}

export default UserService;