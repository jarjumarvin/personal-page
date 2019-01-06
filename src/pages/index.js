import React from 'react';
import Helmet from 'react-helmet';
import '../scss/index.scss';

import Title from '../components/Title';
import Terminal from '../components/Terminal';

import prompts from '../data/about';

const Home = () => (
  <div className="container-lg">
    <Helmet title="Marvin Jarju | personal page" />
    <div className="home-container">
      <div className="home-landing">
        <Title />
        <Terminal prompts={prompts} />
      </div>
    </div>
  </div>
);

export default Home;
