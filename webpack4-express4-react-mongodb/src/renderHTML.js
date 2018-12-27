import ReactDOMServer from 'react-dom/server';

export default component => (req, res) => res.send(`
  <!doctype html>
  <html lang="ko">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:locale" content="ko_KR" />
      <title>Node.js Boilerplate</title>
      <!--<link rel="stylesheet" type="text/css" href="common.css">-->
    </head>
    <body>
      <div id="root">
      ${ReactDOMServer.renderToString(component)}
      </div>
      <script src="/client.bundle.js"></script>
    </body>
  </html>
`);
