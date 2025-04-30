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

const Home: React.FC = () => {
  return (
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
  );
};

export default Home;
