import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import SpecialOffers from './components/SpecialOffers';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <SpecialOffers />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
