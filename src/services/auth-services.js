import config from '../config';

const AuthService = {
  async postNewUser(newUser) {   

    const settings = {
      'method': 'POST',
      'headers': {
        'Content-Type' : 'application/json'
      },
      'body': JSON.stringify(newUser)
    }

    const response = await fetch(`${config.API_ENDPOINT}/user/register`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json(); //returns {authToken: 'JWTString'}
  },


  async postOldUser(oldUser) {

    // Expected input: oldUserCreds = {
    //   username: '',
    //   password: '',
    // }

    // Expected output: JWT

    const settings = {
      'method': 'POST',
      'headers': {
        'Content-Type' : 'application/json'
      },
      'body': JSON.stringify(oldUser)
    }

    const response = await fetch(`${config.API_ENDPOINT}/users/login`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  }
}

export default AuthService;