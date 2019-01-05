import React, { Component } from 'react';
import * as PropTypes from 'prop-types';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}
const propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

class Html extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style id="gatsby-inlined-css">
          { stylesStr }
        </style>
      );
    }

    const {
      headComponents,
      body,
      postBodyComponents,
    } = this.props;

    return (
      <html op="news" lang="en">
        <head>
          { headComponents }

          <meta name="referrer" content="origin" />
          <meta charSet="utf-8" />
          <meta name="description" content="Justin Chi's Portfolio" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
          <title>Marvins Portfolio</title>
          {css}
        </head>
        <body>
          <div id="___gatsby">
            { body }
          </div>
          { postBodyComponents }
        </body>
      </html>
    );
  }
}

Html.propTypes = propTypes;
export default Html;
