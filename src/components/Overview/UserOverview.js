import React, { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';


function UserOverview(props) {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await UserService.getUser();
        setUser(response);
      }
      catch(error) {
        console.log(error)
      }
    }
    getUser();
  }, [setUser]);

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

export default UserOverview;