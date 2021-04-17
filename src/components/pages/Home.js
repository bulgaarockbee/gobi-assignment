import '../../App.css';
import HeroSection from '../HeroSection';
import Sales from '../Sales';
import Cards from '../Cards';
import Gifts from '../Gifts';
import AboutUs from '../AboutUs';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Sales />
      <Cards />
      <Gifts />
      <AboutUs />
      <Footer />
    </>
  );
}

export default Home;