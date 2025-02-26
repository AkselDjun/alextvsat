import { Row } from "antd";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import {
  HeaderSection,
  LogoContainer,
  NotHidden,
} from "./styles";

const data = [
  {
    href: "tel:+375295886248",
    src: "mts.svg",
    text: "+375295886248 (МТС)"
  },
  {
    href: "tel:+375299664886",
    src: "a1.svg",
    text: "+375299664886 (А1)"
  }
];

const Header = () => {
  const MenuItem = () => data.map((item) => (
        <Row>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            key={item.src}
            aria-label={item.src}
          >
            <p style={{ margin: 0 }}>{item.text}</p>
          </a>
        </Row>
      ));


  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="novogrudok.svg" width="80px" height="100px" />
          </LogoContainer>
          <NotHidden>
            {MenuItem()}
          </NotHidden>
        </Row>
      </Container>
    </HeaderSection>
  );
};

export default Header;
