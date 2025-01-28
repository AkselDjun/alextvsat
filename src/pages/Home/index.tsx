import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const HeaderBlock = lazy(() => import("../../components/HeaderBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <HeaderBlock
        direction="up"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="novogrudok.svg"
        id="intro"
      />
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="people.svg"
        id="about"
      />
      <MiddleBlock />
      <Contact />
    </Container>
  );
};

export default Home;
