import styled, { css } from "styled-components";
import { colors, headerHeight, media } from "../../styles/theme";

export const Bar = styled.header<{ solid: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  height: ${headerHeight}px;
  display: flex;
  align-items: center;
  transition: background 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;
  color: #fff;

  ${(p) =>
    p.solid &&
    css`
      background: rgba(255, 255, 255, 0.92);
      backdrop-filter: saturate(180%) blur(14px);
      -webkit-backdrop-filter: saturate(180%) blur(14px);
      box-shadow: 0 1px 0 ${colors.line}, 0 8px 24px rgba(11, 20, 48, 0.06);
      color: ${colors.ink};
    `}
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  color: inherit;

  img {
    width: 36px;
    height: 43px;
    object-fit: contain;
    filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.18));
  }

  strong {
    display: block;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: -0.01em;
    line-height: 1.1;
  }

  small {
    display: block;
    font-size: 12px;
    font-weight: 600;
    opacity: 0.7;
    line-height: 1.3;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;

  a {
    padding: 8px 14px;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 600;
    opacity: 0.85;
    transition: opacity 0.2s ease, background 0.2s ease;

    &:hover {
      opacity: 1;
      background: rgba(127, 140, 180, 0.14);
    }
  }

  ${media.tablet} {
    display: none;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const PhoneLink = styled.a<{ solid: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 18px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 15px;
  white-space: nowrap;
  color: #fff;
  background: ${colors.accent};
  box-shadow: ${(p) => (p.solid ? "0 6px 16px rgba(255, 106, 43, 0.3)" : "none")};
  transition: background 0.2s ease;

  &:hover {
    background: ${colors.accentDark};
    color: #fff;
  }

  ${media.phone} {
    width: 44px;
    padding: 0;
    justify-content: center;

    span {
      display: none;
    }
  }
`;

export const Burger = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 0;
  background: rgba(127, 140, 180, 0.16);
  color: inherit;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${media.tablet} {
    display: inline-flex;
  }
`;

export const Drawer = styled.div<{ open: boolean }>`
  position: fixed;
  inset: ${headerHeight}px 0 auto 0;
  z-index: 49;
  padding: 12px 16px 20px;
  background: #fff;
  box-shadow: 0 24px 40px rgba(11, 20, 48, 0.14);
  border-top: 1px solid ${colors.line};
  transform: translateY(${(p) => (p.open ? "0" : "-12px")});
  opacity: ${(p) => (p.open ? 1 : 0)};
  visibility: ${(p) => (p.open ? "visible" : "hidden")};
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s;

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 8px;
    font-size: 17px;
    font-weight: 700;
    color: ${colors.ink};
    border-bottom: 1px solid ${colors.line};
  }

  @media (min-width: 961px) {
    display: none;
  }
`;

export const DrawerPhones = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 16px;

  a {
    justify-content: flex-start;
    gap: 12px;
    border: 0;
    border-radius: 12px;
    background: ${colors.surfaceAlt};
    padding: 14px 16px;
    font-size: 16px;

    small {
      margin-left: auto;
      font-weight: 600;
      color: ${colors.muted};
    }
  }
`;
