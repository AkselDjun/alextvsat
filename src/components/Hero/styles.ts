import styled, { keyframes } from "styled-components";
import { colors, headerHeight, media } from "../../styles/theme";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const shimmer = keyframes`
  0% { transform: translateX(-120%) skewX(-18deg); }
  60%, 100% { transform: translateX(260%) skewX(-18deg); }
`;

export const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  padding: ${headerHeight + 72}px 0 112px;
  color: #fff;
  background:
    radial-gradient(900px 520px at 85% 10%, rgba(59, 108, 255, 0.35), transparent 60%),
    radial-gradient(700px 480px at 0% 100%, rgba(255, 106, 43, 0.22), transparent 60%),
    linear-gradient(180deg, #0a1230 0%, #0e1a42 100%);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 30%, #000 30%, transparent 75%);
    pointer-events: none;
  }

  ${media.tablet} {
    padding: ${headerHeight + 48}px 0 88px;
  }

  ${media.phone} {
    padding: ${headerHeight + 32}px 0 72px;
  }
`;

export const Grid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 56px;

  ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.14);
  color: rgba(255, 255, 255, 0.9);
`;

export const Title = styled.h1`
  margin-top: 24px;
  color: #fff;
  font-size: clamp(36px, 5.6vw, 64px);
  letter-spacing: -0.03em;

  span {
    background: linear-gradient(90deg, #ff8a4c, #ffb36b);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

export const Lead = styled.p`
  margin-top: 20px;
  max-width: 540px;
  font-size: 19px;
  color: rgba(255, 255, 255, 0.78);

  ${media.phone} {
    font-size: 17px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 36px;

  ${media.phone} {
    a {
      flex: 1 1 100%;
    }
  }
`;

export const Highlights = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 24px;
  margin: 36px 0 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.85);
  }

  svg {
    color: #4ade80;
  }
`;

export const Visual = styled.div`
  position: relative;
  max-width: 520px;
  width: 100%;
  justify-self: center;
  padding: 24px 12px 56px;

  ${media.tablet} {
    max-width: 460px;
  }
`;

export const Tv = styled.div`
  position: relative;
  aspect-ratio: 16 / 10;
  border-radius: 18px;
  padding: 12px;
  background: linear-gradient(160deg, #2a3463, #121a3a);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.08),
    0 40px 80px rgba(0, 0, 0, 0.45),
    0 0 120px rgba(59, 108, 255, 0.35);
`;

export const Screen = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  background:
    radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.35), transparent 40%),
    linear-gradient(135deg, #3b6cff 0%, #7b5cff 45%, #ff6a2b 100%);
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 30%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
    animation: ${shimmer} 4.5s ease-in-out infinite;
  }
`;

export const ScreenMark = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-weight: 800;
  font-size: clamp(16px, 2.2vw, 22px);
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);

  div {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(4px);
  }
`;

export const Stand = styled.div`
  position: absolute;
  left: 50%;
  bottom: 22px;
  transform: translateX(-50%);
  width: 38%;
  height: 34px;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 18%;
    height: 22px;
    background: linear-gradient(180deg, #1a2350, #263066);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 12px;
    border-radius: 12px;
    background: linear-gradient(180deg, #2a3463, #161e45);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  }
`;

export const FloatCard = styled.div<{ pos: "left" | "right"; delay?: number }>`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: 14px;
  background: #fff;
  color: ${colors.ink};
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
  animation: ${float} 5s ease-in-out infinite;
  animation-delay: ${(p) => p.delay || 0}s;
  ${(p) => (p.pos === "left" ? "left: -24px; bottom: 64px;" : "right: -16px; top: 0;")}

  strong {
    display: block;
    font-size: 15px;
    line-height: 1.2;
  }

  small {
    display: block;
    font-size: 13px;
    color: ${colors.muted};
    font-weight: 600;
  }

  ${media.phone} {
    padding: 10px 12px;
    ${(p) => (p.pos === "left" ? "left: -4px; bottom: 40px;" : "right: -4px; top: -4px;")}

    strong {
      font-size: 14px;
    }
  }
`;

export const FloatIcon = styled.span<{ tone: "green" | "orange" }>`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => (p.tone === "green" ? colors.success : colors.accent)};
  background: ${(p) => (p.tone === "green" ? "#e7f8ee" : colors.accentSoft)};
`;
