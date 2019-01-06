import React from 'react';
import Typewriter from './Typewriter';

const Title = () => (
  <div className="title-container">
    <Typewriter className="title-typewriter" text="Marvin Jarju" />
    <div className="title-subtitle">
      I am a computer science student. I enjoy making things.
      <br />
      Find me on
      <a href="https://github.com/jarjumarvin"> Github</a>
      .
    </div>
  </div>
);

export default Title;
