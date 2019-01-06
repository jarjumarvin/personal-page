import React from 'react';

import Helmet from 'react-helmet';
import favico from '../images/favico.png';
import '../scss/index.scss';

import Title from '../components/Title';
import Terminal from '../components/Terminal';

import prompts from '../data/about';


const Home = () => (
  <div className="container-lg">
    <Helmet
      title="Marvin Jarju | personal page"
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favico}` },
      ]}
    />
    <div className="home-container">
      <div className="home-landing">
        <Title />
        <Terminal prompts={prompts} />
      </div>
    </div>
  </div>
);

export default Home;
