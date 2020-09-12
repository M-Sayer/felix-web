import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';

const Header = () => {
  const { isUserLoggedIn, handleUserLog } = useContext(UserContext);

  // Set user to null or redundant?

  // Render logged in state
  // When isUserLoggedIn in UserContext is true
  const renderLoggedInNav = () => {
    return (
      <nav>
        <Link
          onClick={() => {
            handleUserLog();
          }}
          to='/' // Goes to register page from dash/Temp
        >
          Log Out
        </Link>
      </nav>
    )
  }

  // Render logged out state
  // When isUserLoggedIn in UserContext is false
  const renderLoggedOutNav = () => {
    return (
      <nav>
        <Link
          to='/login'
        >
          Log In
        </Link>
        <Link
          to='/register'
        >
          Signup
        </Link>
      </nav>
    )
  }

  return (
    <>
      <header className='header-main'>
        <h1>felix</h1>
        {
          (isUserLoggedIn || TokenService.hasAuthToken())
            ? renderLoggedInNav()
            : renderLoggedOutNav()
        }
      </header>
    </>
  );
}

export default Header;