import { Row } from "antd";
import styled from "styled-components";

export const HeaderSection = styled("section")`
  position: relative;
  padding: 8rem 0 6rem;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0 3rem;
  }
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
  direction === "left" ? "row" : "row-reverse"};
`;
