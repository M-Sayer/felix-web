import config from '../config';
import TokenService from './token-services';

const UserService = {
  async getUser() {
    const settings = {
      'method': 'GET',
      'headers': {
        'Authorization': `Basic ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }

    const response = await fetch(`${config.API_ENDPOINT}/users/user/:id`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();

  },

  // Refactor later
  async getUserTransactions() {
    const settings = {
      'method': 'GET',
      'headers': {
        'Authorization': `Basic ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }

    const response = await fetch(`${config.API_ENDPOINT}/users/transactions`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();

  },
}

export default UserService;