import styled, { css } from "styled-components";
import { colors, media } from "../../styles/theme";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;

  ${media.phone} {
    padding: 0 16px;
  }
`;

export const Section = styled.section<{ tone?: "light" | "alt" }>`
  padding: 104px 0;
  background: ${(p) => (p.tone === "alt" ? colors.surfaceAlt : colors.surface)};

  ${media.tablet} {
    padding: 80px 0;
  }

  ${media.phone} {
    padding: 64px 0;
  }
`;

export const Eyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: ${colors.accent};

  &::before {
    content: "";
    width: 20px;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
  }
`;

export const SectionHead = styled.div<{ center?: boolean }>`
  max-width: 640px;
  margin-bottom: 56px;
  ${(p) =>
    p.center &&
    css`
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    `}

  h2 {
    margin-top: 14px;
    font-size: clamp(28px, 4vw, 42px);
  }

  p {
    margin-top: 16px;
    font-size: 17px;
  }

  ${media.phone} {
    margin-bottom: 36px;
  }
`;

const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 0 26px;
  border-radius: 999px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: 0;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.7;
    cursor: progress;
    transform: none;
  }
`;

export const PrimaryButton = styled.a`
  ${buttonBase}
  background: ${colors.accent};
  color: #fff;
  box-shadow: 0 10px 24px rgba(255, 106, 43, 0.35);

  &:hover {
    background: ${colors.accentDark};
    color: #fff;
  }
`;

export const GhostButton = styled.a`
  ${buttonBase}
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.24);

  &:hover {
    background: rgba(255, 255, 255, 0.16);
    color: #fff;
  }
`;

export const SubmitButton = styled.button`
  ${buttonBase}
  width: 100%;
  background: ${colors.accent};
  color: #fff;
  box-shadow: 0 10px 24px rgba(255, 106, 43, 0.35);

  &:hover {
    background: ${colors.accentDark};
  }
`;
