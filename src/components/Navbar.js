import React from 'react';

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar">
          <a href="https://github.com/jarjumarvin">GitHub</a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
