import React, { Component } from 'react';
import UserContext from '../../contexts/UserContext';
import UserService from '../../services/user-service';

import '../../styles-wip/OverviewStyles.css'

class UserOverview extends Component {
  static contextType = UserContext;

  async componentDidMount() {
    try {
      const user = await UserService.getUser();
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

export default UserOverview;