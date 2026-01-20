import About from '@/components/sections/about/About';
import Contact from '@/components/sections/contact/Contact';
import Navigation from '@/components/sections/header/Navigation';
import Hero from '@/components/sections/hero/Hero';
import Package from '@/components/sections/package/Package';
import Projects from '@/components/sections/projects/Projects';
import NavigateToTop from '@/components/ui/navigate-to-top';
import ToasterSubscriber from '@/components/ui/Toaster';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Package />
      <Contact />
      <NavigateToTop />
      <ToasterSubscriber />
    </>
  );
}
