import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Package from './components/sections/Package';
import Contact from './components/sections/Contact';
import { ToastContainer } from 'kitzo';
import NavigateToTop from './components/ui/navigate-to-top';

export default function App() {
  return (
    <div className="size-full bg-white text-black">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Package />
      <Contact />

      <NavigateToTop />
      <ToastContainer />
    </div>
  );
}
