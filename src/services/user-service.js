import config from '../config';
import TokenService from './token-service';

// User service object strictly for getting user information
// Not for user authentication and signup!
// config.API_ENDPOINT = http://localhost:8000/api
const UserService = {
  async getUser() {
    const settings = {
      'method': 'GET',
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }

    const response = await fetch(`${config.API_ENDPOINT}/transaction/user/${6}`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  }
}

export default UserService;