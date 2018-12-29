import express from 'express';
import exampleDataModel from '../models/example-data-model';

const exampleDataAPI = express.Router();

exampleDataAPI.get('/:title?', async (req, res) => {
  const { title } = req;
  const findDoc = {};
  const isTitleDefined = !!title;
  if (isTitleDefined) {
    findDoc.title = title;
  }
  const result = await exampleDataModel.find(findDoc);
  res.json(result);
});

export default exampleDataAPI;
