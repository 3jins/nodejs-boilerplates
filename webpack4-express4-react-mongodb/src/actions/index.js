import axios from 'axios';
import * as exampleData from './example-data';

export const requestExampleData = async () => ({
  type: exampleData.REQUEST_EXAMPLE_DATA,
});

export const responseExampleData = fetchedData => ({
  type: exampleData.RESPONSE_EXAMPLE_DATA,
  items: fetchedData,
});

export const fetchExampleData = async (title = null) => {
  const apiURI = '/example-data';
  const params = !title ? {} : { title };

  // requestExampleData();
  const fetchedData = await axios.get(apiURI, { params });
  // responseExampleData(fetchedData);
  return { type: exampleData.FETCH_EXAMPLE_DATA, items: fetchedData };
  // return async (dispatch) => {
  //   dispatch(requestExampleData());
  //   const fetchedData = await axios.get(apiURI, { params });
  //   dispatch(responseExampleData(fetchedData));
  //   return { type: exampleData.FETCH_EXAMPLE_DATA };
  // };
};
