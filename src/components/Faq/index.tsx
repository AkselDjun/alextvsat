import styled from "styled-components";
import { faq } from "../../content/site";
import { colors, media, radius, shadow } from "../../styles/theme";
import Icon from "../Icon";
import { Container, Eyebrow, Section, SectionHead } from "../Section";

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  align-items: start;

  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.details`
  border-radius: ${radius.md};
  background: ${colors.surface};
  border: 1px solid ${colors.line};
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &[open] {
    border-color: transparent;
    box-shadow: ${shadow.card};
  }

  summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 22px;
    cursor: pointer;
    list-style: none;

    &::-webkit-details-marker {
      display: none;
    }

    svg {
      flex-shrink: 0;
      color: ${colors.muted};
      transition: transform 0.3s ease, color 0.3s ease;
    }
  }

  &[open] summary svg {
    transform: rotate(180deg);
    color: ${colors.accent};
  }

  h3 {
    font-size: 17px;
    line-height: 1.4;
  }

  p {
    padding: 0 22px 22px;
    font-size: 15px;
  }

  ${media.phone} {
    summary {
      padding: 18px 16px;
    }

    h3 {
      font-size: 16px;
    }

    p {
      padding: 0 16px 18px;
    }
  }
`;

const Faq = () => (
  <Section id="faq">
    <Container>
      <SectionHead center>
        <Eyebrow>Вопросы и ответы</Eyebrow>
        <h2>Частые вопросы о ремонте телевизоров</h2>
        <p>Коротко о том, как мастер работает в Новогрудке и Новогрудском районе.</p>
      </SectionHead>
      <List>
        {faq.map((item, i) => (
          <Item key={item.question} open={i === 0}>
            <summary>
              <h3>{item.question}</h3>
              <Icon name="chevron" size={20} />
            </summary>
            <p>{item.answer}</p>
          </Item>
        ))}
      </List>
    </Container>
  </Section>
);

export default Faq;
