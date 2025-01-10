import { Row, Col, Card } from "antd"
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection } from "./styles";
import React from "react"
import { SvgIcon } from "../../common/SvgIcon"

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  icon: string;
}

const data: MiddleBlockProps[] = [
  {
    title: "Установка спутниковых и эфирных антенн",
    content: "Монтаж и настройка спутниковых и эфирных антенн для надежного сигнала в любых условиях.",
    button: "Заказать установку",
    icon: 'satelite',
  },
  {
    title: "Ремонт телевизоров",
    content: "Быстрая настройка каналов на вашем телевизоре для четкого изображения и оптимального качества звука.",
    button: "Связаться со мной",
    icon: 'broken-tv',
  },
  {
    title: "Настройка телевизионных каналов",
    content: "Диагностика и профессиональный ремонт современных моделей телевизоров любых марок с гарантией.",
    button: "Заказать ремонт",
    icon: 'tv',
  }
];

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
        <Row id="services" justify="space-between" align="middle">
          {data.map(({title, content, button, icon}, index) => (
            <Col lg={7} md={7} sm={24} xs={24} id={index.toString()}>
              <Card
                hoverable
                size="default"
                cover={<SvgIcon src={`${icon}.svg`} width="150px" height="150px" />}
              >
                <Card.Meta
                  title={<p>{title}</p>}
                  description={content}
                  style={{ justifyContent: "center" }}
                />
                {button && (
                  <Button name="submit" onClick={() => scrollTo("contact")}>
                    {button}
                  </Button>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default MiddleBlock;
