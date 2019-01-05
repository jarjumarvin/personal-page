import React from 'react';
import Scrollchor from 'react-scrollchor';

class Navbar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar" ref={this.navbar}>
          <Scrollchor to="#projects" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</Scrollchor>
          <Scrollchor to="#contact" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</Scrollchor>
        </nav>
      </div>
    );
  }
}

export default Navbar;
