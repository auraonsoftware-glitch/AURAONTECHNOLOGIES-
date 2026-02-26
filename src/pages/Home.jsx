import Hero from '../components/Hero';
import About from '../components/About';
import Highlights from '../components/Highlights';
import Menu from '../components/Menu';
import Reviews from '../components/Reviews';
import ReservationForm from '../components/ReservationForm';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-dark-900">
      <Hero />
      <About />
      <Highlights />
      <Menu />
      <Reviews />
      <ReservationForm />
      <Contact />
    </div>
  );
};

export default Home;
