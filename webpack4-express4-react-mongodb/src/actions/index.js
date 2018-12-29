import axios from 'axios';
import * as exampleData from './example-data';

export const requestExampleData = () => ({
  type: exampleData.REQUEST_EXAMPLE_DATA,
});

export const responseExampleData = (items, isValid) => ({
  type: exampleData.RESPONSE_EXAMPLE_DATA,
  items,
  isValid,
});

export const fetchExampleData = (title = null) => {
  const apiURI = '/example-data';
  const params = !title ? {} : { title };

  return async (dispatch) => {
    dispatch(requestExampleData());
    const response = (await axios.get(apiURI, { params }));
    dispatch(responseExampleData(response.data, response.status === 200));
  };
};
