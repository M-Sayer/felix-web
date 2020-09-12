import config from '../config';
import TokenService from './token-service';

// User service object strictly for getting user information
// Not for user authentication and signup!
const UserService = {
  async getUser() {
    const settings = {
      'method': 'GET',
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }

    const response = await fetch(`${config.API_ENDPOINT}/transaction/user/:id`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  }
}

export default UserService;