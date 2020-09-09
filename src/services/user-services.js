import config from '../config';

const UserService = {
  async postNewUser(newUser) {

    // Expected input: newUser = {
    //   username: '',
    //   password: '',
    //   email: '',
    // }

    // Expected output: JWT (Seems redundant)

    const settings = {
      'method': 'POST',
      'headers': {
        'Content-Type' : 'application/json'
      },
      'body': JSON.stringify(newUser)
    }

    const response = await fetch(`${config.API_ENDPOINT}/users/register`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
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

export default UserService;