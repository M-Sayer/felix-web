import React, { Component } from 'react';
import TokenService from '../services/token-service';

// Refactor later

const UserContext = React.createContext({
  user: {},
  isUserLoggedIn: '',
  setUser: () => {},
});

export default UserContext;

export class UserProvider extends Component {
  state = {
    user: {},
    isUserLoggedIn: '',
  }

  setUser = (user) => {
    this.setState({user});
  }

  // Could be better
  setIsUserLoggedIn = (isUserLoggedIn) => {
    this.setState({isUserLoggedIn});
  }
  
  handleUserLog = (token = undefined) => {
    if(token) {
      this.setIsUserLoggedIn(true);
      TokenService.saveAuthToken(token);
    } 
    else {
      this.setIsUserLoggedIn(false);
      TokenService.clearAuthToken();
    }    
  }

  render() {
    return (
      <UserContext.Provider 
        value={{ 
          user: this.state.user,
          isUserLoggedIn: this.state.isUserLoggedIn,

          setUser: this.setUser,
          setIsUserLoggedIn: this.setIsUserLoggedIn,
          handleUserLog: this.handleUserLog,
        }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
