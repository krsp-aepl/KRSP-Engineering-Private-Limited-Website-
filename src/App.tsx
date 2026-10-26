import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Expertise } from './components/Expertise';
import { Sectors } from './components/Sectors';
import { Timeline } from './components/Timeline';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { DeepDetail } from './components/DeepDetail';

function MainApp() {
  const { viewState } = useNavigation();

  if (viewState.type !== 'home') {
    return (
      <div className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white overflow-x-hidden">
        <Header />
        <main>
          <DeepDetail view={viewState} />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Expertise />
        <Sectors />
        <Timeline />
        <WhyChooseUs />
        <Stats />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <MainApp />
    </NavigationProvider>
  );
}
