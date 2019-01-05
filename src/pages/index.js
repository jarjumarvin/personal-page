import React from 'react';
import Helmet from 'react-helmet';
import '../scss/index.scss';

import Hero from '../components/Hero';
import Terminal from '../components/Terminal';

import prompts from '../data/about';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="container-lg">
        <Helmet
          title="Marvin Jarju | personal page"
        />
        <div className="home-container">
          <div className="home-landing">
            <Hero />
            <Terminal prompts={prompts} />
          </div>
        </div>
      </div>
    );
  }
}
