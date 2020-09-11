import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import AuthService from '../../services/auth-service';

// Validation
// Integrate with Formik as soon as logic has been implemented

class LoginForm extends Component {
  static contextType = UserContext;

  handleUserLogin = async(e) => {
    e.preventDefault();
    const username = e.target['username'].value;
    const password = e.target['password'].value;

    const oldUser = {
      username,
      password,
    }

    try {
      const user = await AuthService.postOldUser(oldUser);
      this.context.setUser(user);
    }
    catch(error) {
      // For now
      console.log(error);
    }
  }
    
  render() {
    const { user } = this.context;

    return (
      <form 
        onSubmit={(e) => 
          this.handleUserLogin(e)}
      >
  
        <label
          htmlFor='username'
        >
          Username
        </label>
        <input
          id='username'
          type='text'
          defaultValue=
            {
              user.email
                ? user.email
                : ''
            }
        />
  
        <label
          htmlFor='password'
        >
          Password
        </label>
        <input
          id='password'
          type='text' // Change to type='password'
        />
  
        <button
          type='submit'
        >
          Submit
        </button>
  
      </form>
    );
  }
}

// const LoginForm = (props) => {
//   const { user, setUser } = useContext(UserContext);

//   const handleUserLogin = (e) => {
//     e.preventDefault();
//     const username = e.target['username'].value;
//     const password = e.target['password'].value;

//     const oldUser = {
//       username,
//       password,
//     }

//     setUser(oldUser);
//   }

//   useEffect(() => {
//     // Instead of depending on state
//     // Store username in local storage (if coming from signup)
//     // So if page refreshes, the following logic will not run
//     // Since user in state is now {}
    
//     if(!user.email) {
//       async function postOldUser() {
//         try {
//           // const response = await AuthService.postOldUser(oldUser);
//           // Push to previous page (if not coming from signup)
//           console.log('postOldUser');
//         }
//         catch(error) {
//           console.log(error);
//         }
//       }
//       postOldUser();
//     }
//   })

//   return (
//     <form 
//       onSubmit={(e) => 
//         handleUserLogin(e)}
//     >

//       <label
//         htmlFor='username'
//       >
//         Username
//       </label>
//       <input
//         id='username'
//         type='text'
//         defaultValue=
//           {
//             user.email
//               ? user.email
//               : ''
//           }
//       />

//       <label
//         htmlFor='password'
//       >
//         Password
//       </label>
//       <input
//         id='password'
//         type='text' // Change to type='password'
//       />

//       <button
//         type='submit'
//       >
//         Submit
//       </button>

//     </form>
//   )
// }

export default LoginForm;