import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';

class UserOverview extends Component {
  static contextType = UserContext;

  async componentDidMount() {
    try {
      const user = await UserService.getUser();
      this.context.setUser(user);
    }
    catch(error) {
      this.context.setError(...error);
    }
  }

  render() {
    const { user = {} } = this.context;

    return (
      <article className='UserOverview'>
        <h2>
          User Overview
        </h2>
        <p className='balance btn'>
          Balance
        </p>
        <div className='userData'>
          {user.balance}
        </div>
        
        <p className='allowance btn'>
          Allowance
        </p>
        <div className='userData'>
          {user.allowance}
        </div>
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