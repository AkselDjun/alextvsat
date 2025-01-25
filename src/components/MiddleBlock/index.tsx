import { Row, Col, Card } from "antd";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";
import styled from "styled-components";

const StyledCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  .ant-card-meta-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .ant-card-meta-description {
    font-size: 14px;
    color: #555;
  }
`;

const StyledButton = styled(Button)`
  background: linear-gradient(135deg, #6c5ce7, #a29bfe);
  border: none;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  &:hover {
    background: linear-gradient(135deg, #a29bfe, #6c5ce7);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const data = [
  {
    title: "Ремонт телевизоров",
    content: "Быстрая настройка каналов на вашем телевизоре для четкого изображения и оптимального качества звука.",
    button: "Связаться со мной",
    icon: 'broken-tv',
  },
  {
    title: "Ремонт бытовой техники",
    content: "Монтаж и настройка спутниковых и эфирных антенн для надежного сигнала в любых условиях.",
    button: "Заказать ремонт",
    icon: 'satelite',
  }
];

const MetaDescription = (description: string) => (
  <div style={{ lineClamp: 3 }}>{description}</div>
);

const MiddleBlock = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection id="services">
      <Slide direction="up" triggerOnce>
        <Row justify="space-between" align="middle" gutter={[32, 32]}>
          {data.map(({ title, content, button, icon }, index) => (
            <Col lg={12} md={12} sm={24} xs={24} key={index}>
              <StyledCard
                hoverable
                size="default"
                cover={<SvgIcon src={`${icon}.svg`} width="150px" height="150px" />}
              >
                <div style={{ textAlign: "center" }}>
                  <Card.Meta title={title} description={MetaDescription(content)} />
                  {button && (
                    <StyledButton onClick={() => scrollTo("contact")}>{button}</StyledButton>
                  )}
                </div>
              </StyledCard>
            </Col>
            ))}
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default MiddleBlock;
