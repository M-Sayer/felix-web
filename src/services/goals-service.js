import config from '../config';
import TokenService from './token-service';

// Tentative/Temporary

const GoalsService = {
  async getSingleGoal(id) {
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

  async getAllGoals() {
    const settings = {
      'method': 'GET',
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken(config.TOKEN_KEY)}`,
        'Content-Type' : 'application/json'
      },
    }
    
    // http://localhost:8000/api/goals
    const response = await fetch(`${config.API_ENDPOINT}/goals/`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  },
}

export default GoalsService;