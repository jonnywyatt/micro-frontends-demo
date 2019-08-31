const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

export const renderDocument = ({ html, styles, scriptUrls }) => `<!doctype html>
    <html lang="">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charset="utf-8" />
      <title>Parent app</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      ${styles}
      <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js" defer></script>
      <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js" defer></script>
      <script crossorigin src="https://unpkg.com/styled-components/dist/styled-components.min.js" defer></script>
      <script crossorigin src="https://unpkg.com/react-router-dom@5.0.1/umd/react-router-dom.min.js" defer></script>
      ${
        scriptUrls.map(url => `<script src="${url}" defer></script>`)
      }
      <script src="${assets.client.js}" defer></script>
    </head>
    <body>
        <div id="root">${html}</div>
    </body>
</html>`;
