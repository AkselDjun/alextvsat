import styled from "styled-components";
import { advantages } from "../../content/site";
import { colors, media, radius } from "../../styles/theme";
import Icon from "../Icon";
import Reveal from "../Reveal";
import { Container, Eyebrow, Section, SectionHead } from "../Section";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 64px;
  align-items: center;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Intro = styled.div`
  ${SectionHead} {
    margin-bottom: 32px;
  }
`;

const Illustration = styled.div`
  position: relative;
  border-radius: ${radius.lg};
  padding: 32px 24px 0;
  background: linear-gradient(160deg, ${colors.blueSoft}, ${colors.accentSoft});
  overflow: hidden;

  img {
    width: 100%;
    max-width: 380px;
    margin: 0 auto;
  }

  ${media.tablet} {
    display: none;
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  ${media.phone} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const Item = styled.div`
  height: 100%;
  padding: 26px;
  border-radius: ${radius.md};
  border: 1px solid ${colors.line};
  background: ${colors.surface};
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    border-color: rgba(255, 106, 43, 0.4);
    box-shadow: 0 12px 32px rgba(255, 106, 43, 0.1);
  }

  h3 {
    margin-top: 18px;
    font-size: 18px;
  }

  p {
    margin-top: 8px;
    font-size: 15px;
  }

  ${media.phone} {
    padding: 20px;
  }
`;

const IconBox = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: linear-gradient(145deg, #ff8a4c, ${colors.accent});
  box-shadow: 0 8px 18px rgba(255, 106, 43, 0.3);
`;

const WhyUs = () => (
  <Section id="about">
    <Container>
      <Layout>
        <Intro>
          <SectionHead>
            <Eyebrow>Почему мы</Eyebrow>
            <h2>Почему выбирают нас?</h2>
            <p>Работаем честно и аккуратно, чтобы ваш телевизор служил долго, а ремонт не бил по карману.</p>
          </SectionHead>
          <Illustration>
            <img src="/img/svg/people.svg" alt="" loading="lazy" />
          </Illustration>
        </Intro>
        <List>
          {advantages.map((a, i) => (
            <Reveal key={a.title} delay={i * 80}>
              <Item>
                <IconBox>
                  <Icon name={a.icon} size={22} />
                </IconBox>
                <h3>{a.title}</h3>
                <p>{a.description}</p>
              </Item>
            </Reveal>
          ))}
        </List>
      </Layout>
    </Container>
  </Section>
);

export default WhyUs;
