import React from 'react';
import PropTypes from 'prop-types';

class Typewriter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    const {
      text,
      min,
      max,
      delay,
    } = this.props;

    this.type(
      text,
      min,
      max,
      delay,
    );
  }

  type(text, min, max, delay) {
    let str = '';
    let speed = 0;

    text.split('').forEach((c) => {
      speed += Math.random() * (max - min) + min;
      setTimeout(() => {
        str += c;
        this.setState({ text: str });
      }, delay + speed);
    });
  }

  render() {
    const { className } = this.props;
    const { text } = this.state;
    return (
      <div className={className}>
        { text }
        <span>&nbsp;</span>
      </div>
    );
  }
}

Typewriter.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  delay: PropTypes.number,
};

Typewriter.defaultProps = {
  className: 'hero-title',
  text: 'Let me type something!!',
  min: 90,
  max: 160,
  delay: 700,
};

export default Typewriter;
