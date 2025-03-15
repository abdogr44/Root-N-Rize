import { Children } from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native';

// تسجيل التطبيق
AppRegistry.registerComponent('Main', () => Main);

// حل مشكلة الأنماط في React Native Web
const style = `
  html, body, #__next {
    display: flex;
    flex: 1;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

class MyDocument extends Document {
  render() {
    return (
      <Html dir="rtl" lang="ar">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style dangerouslySetInnerHTML={{ __html: style }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument; 