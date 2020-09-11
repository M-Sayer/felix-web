import React from 'react';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

class RegistrationRoute extends React.Component {
  // Redirect logic here
  static defaultProps = {
    history: {
      push: () => {},
    }
  }

  handleRegSuccess = () => {
    const {history} = this.props;
    history.push('/login');
  }

  render() {
    return (
      <>
        <RegistrationForm
          onRegSuccess={this.handleRegSuccess}
        />
      </>
    )
  }
}

export default RegistrationRoute;