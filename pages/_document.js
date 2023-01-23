import Document, { Html, Main, Head, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={'en'}>
        <Head />
        <body>
          <div id={'overlay'} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
