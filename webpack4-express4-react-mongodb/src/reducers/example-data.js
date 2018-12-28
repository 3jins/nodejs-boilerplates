import { REQUEST_EXAMPLE_DATA, RESPONSE_EXAMPLE_DATA } from '../actions/example-data';

const initialState = {
  isFetching: false,
  items: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_EXAMPLE_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RESPONSE_EXAMPLE_DATA:
      return {
        ...state,
        items: action.items,
        isFetching: false,
      };
    default:
      return state;
  }
};
