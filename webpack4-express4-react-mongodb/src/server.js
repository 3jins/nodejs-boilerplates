import path from 'path';
import express from 'express';
import createError from 'http-errors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './router';
import exampleDataAPI from './api/example-data-api';

const server = express();

const httpPort = process.env.NODE_ENV === 'production' ? 80 : 3000;
const distPath = path.resolve(__dirname, '..', 'dist');

/* logging */
server.use(logger(
  process.env.NODE_ENV === 'production' ? 'prod' : 'dev',
));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

/* server main logic */
server.use(express.static(distPath));
server.use('/example-data', exampleDataAPI);
server.use('/', router);


/* error handling */
server.use((req, res, next) => {
  next(createError(404));
});
server.use((err, req, res) => {
  res.locals.message = err.message;
  res.locals.error = req.server.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.renderHTML('error');
});

server.listen(httpPort, () => {
  console.log(`Express app is listening on port ${httpPort}`);
});

export default server;
