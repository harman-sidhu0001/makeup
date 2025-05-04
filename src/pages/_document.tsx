import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/Final-Logo-nobg.png" type="image/png" />

          {/* Meta Tags for SEO */}
          <meta
            name="description"
            content="Kamna Sharma is a professional makeup artist offering bridal, party, and fashion makeup services in Amritsar. Book now for stunning transformations!"
          />
          <meta
            name="keywords"
            content="Kamna Makeup Artist, Bridal Makeup, Party Makeup, Makeup Artist in Amritsar, Wedding Makeup, Traditional Makeup, Kamna Sharma, Kamna Sharma Makeup"
          />
          <meta name="author" content="Kamna Makeup" />
          <meta name="robots" content="index, follow" />
          <meta
            name="og:title"
            content="Kamna Sharma Makeup | Bridal & Party Makeup Artist"
          />
          <meta
            name="og:description"
            content="Kamna Sharma is a professional makeup artist offering a range of makeup services including bridal, party, and fashion makeup in Amritsar."
          />
          <meta name="og:image" content="/images/og-image.jpg" />
          <meta name="og:url" content="https://kamnamakeup.com" />
          <meta name="og:type" content="website" />

          {/* Google Fonts */}
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
