import React, { Component } from 'react';

class Header extends Component {
  render() {
    const headerStyle = {
      fontSize: 25,
      color: '#666'
    };

    return (
      <div className='header' style={headerStyle}>
        <h1>Coming Soon</h1>
      </div>
    );
  }
}

export default Header;
