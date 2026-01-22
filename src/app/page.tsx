import About from '@/components/sections/about/About';
import Contact from '@/components/sections/contact/Contact';
import Header from '@/components/header/Header';
import Hero from '@/components/sections/hero/Hero';
import Package from '@/components/sections/package/Package';
import Projects from '@/components/sections/projects/Projects';
import NavigateToTop from '@/components/ui/NavigateToTop';
import ToasterSubscriber from '@/components/ui/Toaster';

export default function Home() {
  return (
    <>
      <Header />
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
