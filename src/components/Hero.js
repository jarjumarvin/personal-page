import React from 'react';
import Typewriter from './Typewriter';

class Hero extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Marvin Jarju" />
        <div className="hero-description">
          I am a computer science student. I enjoy making things.
          <br />
          Find me on
          <a href="https://github.com/jarjumarvin"> Github</a>
          .
        </div>
      </div>
    );
  }
}

export default Hero;
