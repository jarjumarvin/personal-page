import React from 'react';
import PropTypes from 'prop-types';

class Terminal extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { prompts } = this.props;
    return (
      <div className="terminal-container">
        <div className="terminal">
          <div className="terminal-header">
            <div className="header-button red" />
            <div className="header-button yellow" />
            <div className="header-button green" />
          </div>
          <div className="terminal-window">
            <Prompts prompts={prompts} />
          </div>
        </div>
      </div>
    );
  }
}

function Prompts(props) {
  const { prompts } = props;
  return (
    <div>
      {prompts.map(entry => <Prompt prompt={entry} />)}
      <div className="prompt">
        <div className="prompt-input">
          <span>&nbsp;</span>
        </div>
      </div>
    </div>
  );
}

function Prompt(props) {
  const { prompt } = props;
  return (
    <div className="prompt">
      <div className="prompt-input">{prompt.input}</div>
      <div className="prompt-return" dangerouslySetInnerHTML={{ __html: prompt.return }} />
    </div>
  );
}

Terminal.defaultProps = {
  prompts: [],
};

Terminal.propTypes = {
  prompts: PropTypes.node,
};

Prompts.defaultProps = {
  prompts: [],
};

Prompts.propTypes = {
  prompts: PropTypes.node,
};

Prompt.defaultProps = {
  prompt: {},
};

Prompt.propTypes = {
  prompt: PropTypes.node,
};

export default Terminal;
