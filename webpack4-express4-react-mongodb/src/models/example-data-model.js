import connection from './connection';

const exampleDataModelSchema = new connection.Schema({
  title: { type: String, required: true, unique: false },
  content: { type: String, required: true, unique: false },
});

const exampleDataModel = connection.model('example_data', exampleDataModelSchema, 'example_data');
export default exampleDataModel;
