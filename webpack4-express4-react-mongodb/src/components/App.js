import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

const App = (props) => {
  const renderData = items => items.map(item => (
    <div key={item._id}>
      <h1>{item.title}</h1>
      <p>{item.content}</p>
    </div>
  ));

  const {
    exampleData: { isValid, isFetching, items },
    handleFetchData,
  } = props;
  const isEmpty = items.length === 0;

  return (
    <div>
      <button type="button" className="link-button" onClick={() => handleFetchData()}>
        Click to fetch example data
      </button>
      {isFetching && <p>loading...</p>}
      {!isFetching && !isValid
      && <p>Request failed!</p>
      }
      {!isFetching && isValid && isEmpty
        ? <p>There is no data</p>
        : renderData(items)
      }
    </div>
  );
};

App.propTypes = {
  exampleData: PropTypes.shape({
    isValid: PropTypes.bool,
    isFetching: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.content,
    })),
  }),
  handleFetchData: PropTypes.func.isRequired,
};

App.defaultProps = {
  exampleData: {
    isValid: true,
    isFetching: false,
    items: [],
  },
};

const mapStateToProps = state => ({
  exampleData: state.exampleData,
});

const mapDispatchToProps = dispatch => ({
  handleFetchData: (title) => {
    dispatch(actions.fetchExampleData(title));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
