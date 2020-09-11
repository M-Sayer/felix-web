import config from '../config'
import TokenService from './token-service'

const TransactionService = {
  async getSingleTransaction(type,id) {
    const settings = {
      'method': 'GET',
      'headers': {
        'Authorization': `Basic ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }

    const response = await fetch(`${config.API_ENDPOINT}/transaction/${type}/${id}`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  },

  async getAllTransactions() {
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
};


export default TransactionService;