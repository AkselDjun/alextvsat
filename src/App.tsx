import CallBar from "./components/CallBar";
import Contact from "./components/Contact";
import Defects from "./components/Defects";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import { GlobalStyles } from "./styles/GlobalStyles";

const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      <Defects />
      <Faq />
      <Contact />
    </main>
    <Footer />
    <CallBar />
  </>
);

export default App;
