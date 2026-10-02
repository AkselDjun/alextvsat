import { useState } from "react";
import styled from "styled-components";
import { defects, phones } from "../../content/site";
import { colors, media, radius, shadow } from "../../styles/theme";
import Icon from "../Icon";
import { Container, Eyebrow, PrimaryButton, Section, SectionHead } from "../Section";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 64px;
  align-items: start;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const Aside = styled.div`
  position: sticky;
  top: 112px;

  ${SectionHead} {
    margin-bottom: 32px;
  }

  ${media.tablet} {
    position: static;
  }
`;

const Help = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  border-radius: ${radius.lg};
  background: ${colors.surface};
  box-shadow: ${shadow.card};

  img {
    width: 96px;
    flex-shrink: 0;
  }

  strong {
    display: block;
    color: ${colors.ink};
    font-size: 17px;
  }

  p {
    margin: 4px 0 14px;
    font-size: 15px;
  }

  ${PrimaryButton} {
    min-height: 44px;
    padding: 0 20px;
    font-size: 15px;
  }

  ${media.phone} {
    img {
      display: none;
    }
  }
`;

const List = styled.div`
  display: grid;
  gap: 12px;
`;

const Item = styled.div<{ open: boolean }>`
  border-radius: ${radius.md};
  background: ${colors.surface};
  border: 1px solid ${(p) => (p.open ? "rgba(255, 106, 43, 0.45)" : colors.line)};
  box-shadow: ${(p) => (p.open ? shadow.card : "none")};
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
`;

const Trigger = styled.button<{ open: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 22px;
  border: 0;
  background: none;
  text-align: left;
  cursor: pointer;
  color: ${colors.ink};
  font-size: 17px;
  font-weight: 700;
  border-radius: ${radius.md};

  b {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: ${(p) => (p.open ? "#fff" : colors.accent)};
    background: ${(p) => (p.open ? colors.accent : colors.accentSoft)};
    transition: background 0.25s ease, color 0.25s ease;
    flex-shrink: 0;
  }

  svg {
    margin-left: auto;
    color: ${colors.muted};
    transform: rotate(${(p) => (p.open ? "180deg" : "0")});
    transition: transform 0.25s ease;
  }

  ${media.phone} {
    padding: 16px;
    font-size: 16px;
  }
`;

const Panel = styled.div<{ open: boolean }>`
  display: grid;
  grid-template-rows: ${(p) => (p.open ? "1fr" : "0fr")};
  transition: grid-template-rows 0.3s ease;

  > div {
    overflow: hidden;
  }

  p {
    padding: 0 22px 22px 70px;
    font-size: 15px;

    ${media.phone} {
      padding: 0 16px 18px;
    }
  }
`;

const Defects = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="defect" tone="alt">
      <Container>
        <Layout>
          <Aside>
            <SectionHead>
              <Eyebrow>Неисправности</Eyebrow>
              <h2>Основные неисправности телевизоров</h2>
              <p>Узнайте симптомы самых частых поломок. Точную причину определим на бесплатной диагностике.</p>
            </SectionHead>
            <Help>
              <img src="/img/svg/big-tv.svg" alt="" loading="lazy" />
              <div>
                <strong>Не нашли свою проблему?</strong>
                <p>Позвоните, и мастер подскажет, что можно сделать.</p>
                <PrimaryButton href={phones[0].href}>
                  <Icon name="phone" size={16} />
                  Позвонить
                </PrimaryButton>
              </div>
            </Help>
          </Aside>
          <List>
            {defects.map((d, i) => {
              const isOpen = open === i;
              return (
                <Item key={d.title} open={isOpen}>
                  <Trigger
                    type="button"
                    open={isOpen}
                    aria-expanded={isOpen}
                    aria-controls={`defect-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <b>{i + 1}</b>
                    {d.title}
                    <Icon name="chevron" size={20} />
                  </Trigger>
                  <Panel open={isOpen} id={`defect-${i}`} role="region">
                    <div>
                      <p>{d.description}</p>
                    </div>
                  </Panel>
                </Item>
              );
            })}
          </List>
        </Layout>
      </Container>
    </Section>
  );
};

export default Defects;
