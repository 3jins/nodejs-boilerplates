import { REQUEST_EXAMPLE_DATA, RESPONSE_EXAMPLE_DATA } from '../actions/example-data';

const initialState = {
  isValid: true,
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
        isValid: action.isValid,
        isFetching: false,
        items: action.items,
      };
    default:
      return state;
  }
};
