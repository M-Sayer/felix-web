import React, { Component } from 'react';

// Refactor later

const UserContext = React.createContext({
  user: {},
  setUser: () => {},
});

export default UserContext;

export class UserProvider extends Component {
  state = {
    user: {},
  }

  setUser = (user) => {
    this.setState({user});
  }

  render() {
    return (
      <UserContext.Provider 
        value={{ 
          user: this.state.user,
          setUser: this.setUser,
        }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

// export const UserProvider = (props) => {
//   const [user, setUser] = useState({});

//   return (
//     <UserContext.Provider 
//       value={{ 
//         user,
//         setUser,
//       }}>
//       {props.children}
//     </UserContext.Provider>
//   );
// }