import config from '../config';
import TokenService from './token-service';

// Tentative/Temporary

const GoalsService = {

  // getGoal
  async getGoal(id) {
    const settings = {
      'method': 'GET',
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }

    // http://localhost:8000/api/goals
    const response = await fetch(`${config.API_ENDPOINT}/goals/${id}`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  },

  // getAllGoals
  async getGoals() {
    const settings = {
      'method': 'GET',
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }
    
    // http://localhost:8000/api/goals
    const response = await fetch(`${config.API_ENDPOINT}/transactions`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  },

  async postGoal(goal) {
    const settings = {
      'method': 'POST',
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
      'body': JSON.stringify(goal)
    }
    
    // http://localhost:8000/api/goals
    const response = await fetch(`${config.API_ENDPOINT}/goals`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  },

  async patchGoal(goal) {
    const settings = {
      'method': 'PATCH',
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
      'body': JSON.stringify(goal)
    }
    
    // http://localhost:8000/api/goals
    const response = await fetch(`${config.API_ENDPOINT}/goals`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  },

  async deleteGoal(goalId) {
    const settings = {
      'method': 'DELETE',
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
      'body': JSON.stringify(goalId)
    }
    
    // http://localhost:8000/api/goals
    const response = await fetch(`${config.API_ENDPOINT}/goals`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  },
}

export default GoalsService;