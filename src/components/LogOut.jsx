import React from 'react';


LogoutButton = () => {
    // Remove the username and password from localStorage
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    // You may also want to redirect the user to the login page or perform other logout-related actions
    // For example, using react-router-dom:
    // this.props.history.push('/login');
  };

  render() {
    return (
      <button onClick={this.handleLogout}>
        Logout
      </button>
    );
  }


export default LogoutButton;
