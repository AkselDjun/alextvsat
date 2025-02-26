import { Col } from "antd"
import { Fade } from "react-awesome-reveal";
import React from 'react';

import { ContentBlockProps } from "../ContentBlock/types";
import {
  HeaderSection,
  StyledRow,
} from "./styles";
import { Button } from "../../common/Button"

const HeaderBlock = ({
  title,
  id,
  direction,
  button,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <HeaderSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          id={id}
          direction={direction}
        >
          <Col lg={24} md={24} sm={24} xs={24}>
            <div style={{ textAlign: "center" }}>
              <h6>{title}</h6>
                <div>
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
                            style={{ margin: 10 }}
                          >
                            {item.title}
                          </Button>
                        );
                      }
                    )}
                </div>
            </div>
          </Col>
        </StyledRow>
      </Fade>
    </HeaderSection>
  );
};

export default HeaderBlock;
