import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/App';

export default (req, res) => {
  const component = ReactDOMServer.renderToString(
    <App />,
  );
  return res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:locale" content="ko_KR" />
        <!--<link rel="stylesheet" type="text/css" href="common.css">-->
      </head>
      <body>
        <div id="root">
        ${component}
        </div>
        <script src="/client.bundle.js"></script>
      </body>
    </html>
  `);
};
