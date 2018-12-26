import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  componentDidMount() {}

  render() {
    const { data: { title, content } } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
};

App.defaultProps = {
  data: { title: 'default title', content: 'default content' },
};

export default App;
