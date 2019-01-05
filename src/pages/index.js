import React from 'react';
import Helmet from 'react-helmet';
import '../scss/index.scss';

import Navbar from '../components/Navbar';
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
          title="jarjumarvin"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <div className="home-container">
          <Navbar />
          <Hero />
          <Terminal prompts={prompts} />
        </div>
      </div>
    );
  }
}
