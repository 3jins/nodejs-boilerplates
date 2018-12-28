import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/index';

class App extends React.Component {
  getDerivedStateFromProps() {
    if (this.nextProps.isFetching !== this.prevState.isFetching) {
      return { isFetching: this.nextProps.isFetching };
    }
    if (this.nextProps.exampleData !== this.prevState.exampleData) {
      return { exampleData: this.nextProps.exampleData };
    }
    return null;
  }

  render() {
    const renderData = items => items.map(item => (
      <div>
        <h1>{item.title}</h1>
        <p>{item.content}</p>
      </div>
    ));

    const {
      exampleData: { isFetching, items },
      handleFetchData,
    } = this.props;
    const isEmpty = items.length === 0;
    console.log(items);
    console.log(handleFetchData);
    return (
      <div>
        <button type="button" className="link-button" onClick={() => handleFetchData()}>
          Click to fetch example data
        </button>
        {isFetching && <p>loading...</p>}
        {!isFetching && isEmpty
          ? <p>There is no data</p>
          : renderData(items)
        }
      </div>
    );
  }
}

App.propTypes = {
  exampleData: PropTypes.shape({
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
    isFetching: false,
    items: [],
  },
};

const mapStateToProps = state => ({
  exampleData: state.exampleData,
});

const mapDispatchToProps = dispatch => ({
  handleFetchData: title => dispatch(actions.fetchExampleData(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
