import styled from "styled-components";
import { services } from "../../content/site";
import { colors, media, radius, shadow } from "../../styles/theme";
import Reveal from "../Reveal";
import { Container, Eyebrow, Section, SectionHead } from "../Section";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);

    & > :last-child:nth-child(odd) {
      grid-column: 1 / -1;
    }
  }

  ${media.phone} {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 28px;
  border-radius: ${radius.lg};
  background: ${colors.surface};
  box-shadow: ${shadow.card};
  border: 1px solid ${colors.line};
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${shadow.lift};
    border-color: transparent;
  }

  h3 {
    margin-top: 24px;
    font-size: 20px;
  }

  p {
    margin-top: 12px;
    font-size: 15px;
  }

  ${media.phone} {
    flex-direction: row;
    align-items: flex-start;
    gap: 18px;
    padding: 20px;

    h3 {
      margin-top: 0;
      font-size: 18px;
    }

    p {
      margin-top: 6px;
    }
  }
`;

const Art = styled.div`
  width: 88px;
  height: 88px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(145deg, ${colors.blueSoft}, ${colors.accentSoft});
  flex-shrink: 0;

  img {
    width: 60px;
    height: 60px;
  }

  ${media.phone} {
    width: 64px;
    height: 64px;
    border-radius: 16px;

    img {
      width: 44px;
      height: 44px;
    }
  }
`;

const Services = () => (
  <Section id="services" tone="alt">
    <Container>
      <SectionHead center>
        <Eyebrow>Услуги</Eyebrow>
        <h2>Ремонт телевизоров и настройка ТВ</h2>
        <p>Ремонтируем ЖК и LED телевизоры в Новогрудке и районе, настраиваем спутниковое и цифровое ТВ, выкупаем технику на запчасти.</p>
      </SectionHead>
      <Grid>
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80}>
            <Card>
              <Art>
                <img src={`/img/svg/${s.icon}`} alt="" loading="lazy" />
              </Art>
              <div>
                <h3>{s.title}</h3>
                <p>{s.content}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Services;
