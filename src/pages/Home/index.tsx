import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";

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
      <MiddleBlock />
      <ContentBlock
        direction="left"
        icon="people.svg"
        id="about"
      />
      <ContentBlock
        direction="right"
        icon="big-tv.svg"
        id="defect"
      />
      <Contact />
    </Container>
  );
};

export default Home;
