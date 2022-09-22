import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <script src="https://mf-nextjs-core.vercel.app/_next/static/runtime/coreRemoteEntry.js" />
        <script src="https://mf-nextjs-pro.vercel.app/_next/static/runtime/proRemoteEntry.js" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;