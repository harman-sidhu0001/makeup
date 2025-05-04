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
