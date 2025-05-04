import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Academy from "../components/Academy";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Booking from "../components/Booking";
import Footer from "../components/Footer";
import Toast from "../components/Toast";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kamna Sharma Makeup | Makeup & Hair Artist</title>
        <meta
          name="description"
          content="Kamna Sharma Makeup and Hair Styling offers professional makeup and hair styling services for bridal, party, desitational wedding, traditional style, and special occasions. Book now!"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Kamna Sharma Makeup | Makeup & Hair Artist"
        />
        <meta
          property="og:description"
          content="Kamna Sharma Makeup and Hair Styling offers professional makeup and hair styling services for bridal, party, desitational wedding, traditional style, and special occasions. Book now!"
        />
        <meta
          property="og:image"
          content="https://kamnamakeup.com/photo6.jpg.jpg"
        />
        <meta property="og:url" content="https://kamnamakeup.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kamna Sharma Makeup | Makeup & Hair Artist"
        />
        <meta
          name="twitter:description"
          content="Kamna Sharma Makeup and Hair Styling offers professional makeup and hair styling services for bridal, party, desitational wedding, traditional style, and special occasions. Book now!"
        />
        <meta
          name="twitter:image"
          content="https://kamnamakeup.com/photo6.jpg.jpg"
        />
      </Head>

      <div className="bg-gray-50">
        <Header />
        <Hero />
        <Services />
        <Gallery />
        <Academy />
        <Testimonials />
        <Contact />
        <Booking />
        <Footer />
        <Toast />
      </div>
    </>
  );
};

export default Home;
