import styled from "styled-components";
import { steps } from "../../content/site";
import { media } from "../../styles/theme";
import Icon from "../Icon";
import Reveal from "../Reveal";
import { Container, Eyebrow, SectionHead } from "../Section";

const Wrapper = styled.section`
  position: relative;
  padding: 96px 0;
  color: #fff;
  background:
    radial-gradient(700px 400px at 100% 0%, rgba(59, 108, 255, 0.3), transparent 60%),
    linear-gradient(180deg, #0e1a42, #0a1230);

  ${SectionHead} h2 {
    color: #fff;
  }

  ${SectionHead} p {
    color: rgba(255, 255, 255, 0.72);
  }

  ${media.phone} {
    padding: 64px 0;
  }
`;

const Steps = styled.ol`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: step;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.phone} {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

const Step = styled.div`
  position: relative;
  height: 100%;
  padding: 28px 24px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  counter-increment: step;

  &::after {
    content: "0" counter(step);
    position: absolute;
    top: 20px;
    right: 22px;
    font-size: 40px;
    font-weight: 800;
    line-height: 1;
    color: rgba(255, 255, 255, 0.08);
  }

  span {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #ffb36b;
    background: rgba(255, 106, 43, 0.14);
  }

  h3 {
    margin-top: 20px;
    font-size: 19px;
    color: #fff;
  }

  p {
    margin-top: 8px;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.7);
  }

  ${media.phone} {
    padding: 22px 20px;
  }
`;

const Process = () => (
  <Wrapper>
    <Container>
      <SectionHead center>
        <Eyebrow>Как мы работаем</Eyebrow>
        <h2>От заявки до работающего телевизора</h2>
        <p>Простой и понятный порядок работы без лишних хлопот для вас.</p>
      </SectionHead>
      <Steps>
        {steps.map((s, i) => (
          <Reveal key={s.title} as="li" delay={i * 80}>
            <Step>
              <span>
                <Icon name={s.icon} size={22} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Step>
          </Reveal>
        ))}
      </Steps>
    </Container>
  </Wrapper>
);

export default Process;

