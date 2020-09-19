import config from '../config';
import TokenService from './token-service';

export const getAlerts = async () => {
  try {
    const alerts = await fetch(`${config.API_ENDPOINT}/alerts`, {
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
      }
    });

    return alerts.json();
  } catch (error) {
    console.log(error)
  }
}