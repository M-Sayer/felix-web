import React, { useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';


function UserOverview(props) {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function getUser() {
      try {
        const response = await UserService.getUser();
        console.log(response);
      }
      catch(error) {
        console.log(error)
      }
    }
    getUser();
  });

  return (
    <>
      User Overview
    </>
  );
}

export default UserOverview;