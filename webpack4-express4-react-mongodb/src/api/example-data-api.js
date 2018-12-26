import express from 'express';
import exampleDataModel from '../models/example-data-model';

const exampleDataAPI = express.Router();

exampleDataAPI.get('/:title?', (req) => {
  const { title } = req;
  const findDoc = {};
  const isTitleDefined = !!title;
  if (isTitleDefined) {
    findDoc.title = title;
  }
  const unhandledResult = exampleDataModel.find(findDoc);
  unhandledResult
    .then(result => console.log(result))
    .catch(err => console.log(err));
});

export default exampleDataAPI;
