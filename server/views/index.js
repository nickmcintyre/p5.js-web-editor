export function renderIndex() {
  const assetsManifest = process.env.webpackAssets && JSON.parse(process.env.webpackAssets);
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="keywords" content="'computiful, computiful editor, math, p5.js, processing, python'" />
      <meta name="description" content="A simple coding platform for math students." />
      <title>Computiful Editor</title>
      ${process.env.NODE_ENV === 'production' ? `<link rel='stylesheet' href='${assetsManifest['/app.css']}' />` : ''}
      <link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet' type='text/css'>
      <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
      <link rel='shortcut icon' href='https://computiful.org/assets/images/logo/favicon.ico' type='image/x-icon' / >
      <script src="https://assets.computiful.org/pre-alpha/numero.js"></script>
      <script>
        if (!window.process) {
          window.process = {};
        }
        if (!window.process.env) {
          window.process.env = {};
        }
        window.process.env.API_URL = '${process.env.API_URL}';
        window.process.env.NODE_ENV = '${process.env.NODE_ENV}';
        window.process.env.S3_BUCKET = '${process.env.S3_BUCKET}';
        window.process.env.S3_BUCKET_URL_BASE = ${process.env.S3_BUCKET_URL_BASE ? `'${process.env.S3_BUCKET_URL_BASE}'` : undefined};
        window.process.env.AWS_REGION = '${process.env.AWS_REGION}';
        window.process.env.FORCE_TO_HTTPS = ${process.env.FORCE_TO_HTTPS === 'false' ? false : undefined};
        window.process.env.CLIENT = true;
        window.process.env.LOGIN_ENABLED = ${process.env.LOGIN_ENABLED === 'false' ? false : true};
        window.process.env.EXAMPLES_ENABLED = ${process.env.EXAMPLES_ENABLED === 'false' ? false : true};
        window.process.env.UI_ACCESS_TOKEN_ENABLED = ${process.env.UI_ACCESS_TOKEN_ENABLED === 'false' ? false : true};
        window.process.env.UI_COLLECTIONS_ENABLED = ${process.env.UI_COLLECTIONS_ENABLED === 'false' ? false : true};
        window.process.env.UPLOAD_LIMIT = ${process.env.UPLOAD_LIMIT ? `${process.env.UPLOAD_LIMIT}` : undefined};
        window.process.env.MOBILE_ENABLED = ${process.env.MOBILE_ENABLED ? `${process.env.MOBILE_ENABLED}` : undefined};
        window.process.env.TRANSLATIONS_ENABLED = ${process.env.TRANSLATIONS_ENABLED === 'true' ? true : false}; 

      </script>
    </head>
    <body>
      <div id="root" class="root-app">
      </div>
      <script src='${process.env.NODE_ENV === 'production' ? `${assetsManifest['/app.js']}` : '/app.js'}'></script>
    </body>
  </html>
  `;
}
