import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/Final-Logo-nobg.png" type="image/png" />
          <meta
            name="description"
            content="Kamna is a professional makeup artist offering bridal, party, and fashion makeup services in [City]. Book now for stunning transformations!"
          />
          <meta
            name="keywords"
            content="Kamna Makeup Artist, Bridal Makeup, Party Makeup, Makeup Artist in Amritsar, Wedding Makeup, Traditional Makeup, Kamna Sharma, Kamna Sharma Makeup, Kamna Sharma Makeup Artist"
          />
          <meta name="author" content="Kamna Makeup" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600;700&display=swap"
          />
          {/* Font Awesome CDN */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          />
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
