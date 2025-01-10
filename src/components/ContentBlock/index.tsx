import { Col, Timeline } from "antd"
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
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

  const items = { children: 'sample', label: 'sample' };

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
            <SvgIcon src={icon} width={id === "intro" ? "80%" : "100%"} height={id === "intro" ? "80%" : "100%"} />
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
                <Timeline>
                  <Timeline.Item color="#18216d">
                    <p>Более 20 лет опыта работы</p>
                  </Timeline.Item>
                  <Timeline.Item color="#18216d">
                    <p>Быстрое и качественное обслуживание</p>
                  </Timeline.Item>
                  <Timeline.Item color="#18216d">
                    <p>Доступные цены и гарантия на работы</p>
                  </Timeline.Item>
                  <Timeline.Item color="#18216d">
                    <p>Персонализированный подход к каждому клиенту</p>
                  </Timeline.Item>
                </Timeline>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
