import styled from "styled-components";
import { company, nav, phones } from "../../content/site";
import { colors, media } from "../../styles/theme";
import { Container } from "../Section";

const Wrapper = styled.footer`
  padding: 56px 0 32px;
  background: #070d24;
  color: rgba(255, 255, 255, 0.65);
  font-size: 15px;

  ${media.phone} {
    padding-bottom: 104px;
  }
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  ${media.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  ${media.phone} {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  h4 {
    margin-bottom: 14px;
    color: #fff;
    font-size: 15px;
    letter-spacing: 0;
  }

  ul {
    display: grid;
    gap: 8px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    transition: color 0.2s ease;

    &:hover {
      color: ${colors.accent};
    }
  }
`;

const Brand = styled.div`
  display: flex;
  gap: 14px;
  align-items: flex-start;

  img {
    width: 40px;
    height: 48px;
    object-fit: contain;
  }

  strong {
    display: block;
    color: #fff;
    font-size: 18px;
  }

  p {
    margin-top: 6px;
    max-width: 320px;
  }

  ${media.tablet} {
    grid-column: 1 / -1;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  padding-top: 24px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.45);
`;

const Footer = () => (
  <Wrapper>
    <Container>
      <Top>
        <Brand>
          <img src="/img/svg/novogrudok.svg" alt="" />
          <div>
            <strong>{company.brand}</strong>
            <p>Ремонт телевизоров, настройка спутникового и цифрового ТВ в Новогрудке и районе.</p>
          </div>
        </Brand>
        <div>
          <h4>Разделы</h4>
          <ul>
            {nav.map((item) => (
              <li key={item.target}>
                <a href={`#${item.target}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Телефоны</h4>
          <ul>
            {phones.map((p) => (
              <li key={p.href}>
                <a href={p.href}>
                  {p.display} ({p.operator})
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Top>
      <Bottom>
        <span>
          © {new Date().getFullYear()} {company.brand}
        </span>
        <span>{company.region}</span>
      </Bottom>
    </Container>
  </Wrapper>
);

export default Footer;
