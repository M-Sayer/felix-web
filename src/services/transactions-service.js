import config from '../config'
import TokenService from './token-service'

// config.API_ENDPOINT = http://localhost:8000/api
const TransactionsService = {
  async getSingleTransaction(type, id) {
    const settings = {
      'method': 'GET',
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }
    // http://localhost:8000/api/transactions/:type/:id
    const response = await fetch(`${config.API_ENDPOINT}/transactions/${type}/${id}`, settings);

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
        'Authorization': `Bearer ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }

    // http://localhost:8000/api/transactions/
    const response = await fetch(`${config.API_ENDPOINT}/transactions`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  },

  async createTransaction( newTransactionObject ) {
    //newTransactionObject should contain name, description, amount, category, and type
    const settings = {
      'method': 'POST',
      'body' : JSON.stringify(newTransactionObject),
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }
    await fetch(`${config.API_ENDPOINT}/transactions/create`, settings);
  }
}


export default TransactionsService;