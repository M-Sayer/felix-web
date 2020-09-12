import config from '../config'
import TokenService from './token-service'

// config.API_ENDPOINT = http://localhost:8000/api
const TransactionsService = {
  async getSingleTransaction(type, id) {
    const settings = {
      'method': 'GET',
      'headers': {
        'Authorization': `Basic ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }
    // http://localhost:8000/api/transactions/:type/:id
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

    // http://localhost:8000/api/transactions/
    const response = await fetch(`${config.API_ENDPOINT}/transaction`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  },
}


export default TransactionsService;