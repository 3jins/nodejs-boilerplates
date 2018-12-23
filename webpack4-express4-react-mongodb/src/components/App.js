import React from 'react';
import PropTypes from 'prop-types';

const App = ({ data }) => <h1>{data}</h1>;

App.propTypes = {
  data: PropTypes.string,
};

App.defaultProps = {
  data: 'default',
};

export default App;
