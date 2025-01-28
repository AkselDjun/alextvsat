import { Avatar, Card, Col, List } from "antd"
import { Fade } from "react-awesome-reveal";
import React from 'react';

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  ContentWrapper,
  StyledRow,
  ButtonWrapper,
} from "./styles";
import { Icon } from "../../common/Icon"

const data = [
  {
    icon: "mechanic",
    title: "Выезд мастера и диагностика проводятся бесплатно",
    description: "Мы экономим не только время, но и деньги заказчиков, поэтому оказываем ряд услуг на безвозмездной основе..",
  },
  {
    icon: "clock",
    title: "Быстрое и качественное обслуживание",
    description: "Мы гарантируем быстрое и эффективное выполнение всех работ. Наши специалисты всегда готовы приехать в удобное для вас время и быстро решить любые проблемы с антеннами и телевизорами.",
  },
  {
    icon: "dollar",
    title: "Доступные цены и гарантия на работы",
    description: "Мы предлагаем конкурентоспособные цены на все наши услуги без скрытых платежей. Кроме того, мы предоставляем гарантию на все выполненные работы.",
  },
  {
    icon: "smile",
    title: "Персонализированный подход к каждому клиенту",
    description: "Мы ценим каждого клиента и стараемся предоставить индивидуальный подход к решению всех ваших проблем с телевизионной техникой. Ваше удовлетворение — наш приоритет.",
  }
]

const ContentBlock = ({
  icon,
  title,
  button,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={10} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width={id === "intro" ? "70%" : "90%"} height={id === "intro" ? "70%" : "90%"} />
          </Col>
          <Col lg={10} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              {direction === "right" && (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                          scrollTo: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo(item.scrollTo)}
                          >
                            {item.title}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              )}
              {id === "about" && (
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Icon src={item.icon} />}
                        title={<p>{item.title}</p>}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;
