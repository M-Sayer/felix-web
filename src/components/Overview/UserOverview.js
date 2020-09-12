import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';

class UserOverview extends Component {
  static contextType = UserContext;

  async componentDidMount() {
    try {
      const user = await UserService.getUser();
      console.log(user);
      this.context.setUser(user);
    }
    catch(error) {
      // For now!
      console.log(error);
    }
  }

  render() {
    const { user = {} } = this.context;

    return (
      <article>
        <h2>
          User Overview
        </h2>
        <p>
          Balance: {user.balance}
        </p>
        <p>
          Allowance: {user.allowance}
        </p>
      </article>
    );
  }
}

// function UserOverview(props) {
//   const { user, setUser } = useContext(UserContext);

//   useEffect(() => {
//     async function getUser() {
//       try {
//         const response = await UserService.getUser();
//         setUser(response);
//       }
//       catch(error) {
//         console.log(error)
//       }
//     }
//     getUser();
//   }, [setUser]);

//   return (
//     <article>
//       <h2>
//         User Overview
//       </h2>
//       <p>
//         Balance: {user.balance}
//       </p>
//       <p>
//         Allowance: {user.allowance}
//       </p>
//     </article>
//   );
// }

export default UserOverview;