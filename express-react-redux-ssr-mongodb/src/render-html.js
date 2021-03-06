import './res/favicon.ico';

export default component => (`
  <!doctype html>
  <html lang="ko">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:locale" content="ko_KR" />
      <title>Node.js Boilerplate</title>
      <link rel="shortcut icon" type="image/png" href="favicon.ico" />
    </head>
    <body>
      <div id="root">${component}</div>
      <script src="/client.bundle.js"></script>
    </body>
  </html>
`);
