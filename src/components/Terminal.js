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

Terminal.defaultProps = {
  prompts: [],
};

Terminal.propTypes = {
  prompts: PropTypes.arrayOf(
    PropTypes.shape({
      query: PropTypes.string,
      answer: PropTypes.string,
    }),
  ),
};

export default Terminal;

function Prompts(props) {
  const { prompts } = props;
  return (
    <div>
      {prompts.map(prompt => <Prompt prompt={prompt} key={prompt.id} />)}
      <div className="prompt">
        <div className="prompt-question empty">
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
      <div className="prompt-question">{prompt.query}</div>
      <div className="prompt-answer" dangerouslySetInnerHTML={{ __html: prompt.answer }} />
    </div>
  );
}

const promptShape = PropTypes.shape({
  id: PropTypes.number,
  query: PropTypes.string,
  answer: PropTypes.string,
});

Prompt.propTypes = {
  prompt: promptShape,
};

Prompt.defaultProps = {
  prompt: {
    query: '',
    answer: '',
  },
};

Prompts.propTypes = {
  prompts: PropTypes.arrayOf(promptShape),
};

Prompts.defaultProps = {
  prompts: [],
};
