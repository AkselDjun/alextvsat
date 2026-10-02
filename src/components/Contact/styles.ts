import styled from "styled-components";
import { colors, media, radius, shadow } from "../../styles/theme";

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  border-radius: 28px;
  overflow: hidden;
  background: ${colors.surface};
  box-shadow: ${shadow.lift};
  border: 1px solid ${colors.line};

  ${media.tablet} {
    grid-template-columns: 1fr;
  }
`;

export const Info = styled.div`
  position: relative;
  padding: 48px;
  color: #fff;
  background:
    radial-gradient(500px 300px at 100% 0%, rgba(59, 108, 255, 0.4), transparent 60%),
    radial-gradient(400px 300px at 0% 100%, rgba(255, 106, 43, 0.25), transparent 60%),
    linear-gradient(160deg, #0e1a42, #0a1230);

  h2 {
    margin-top: 14px;
    color: #fff;
    font-size: clamp(28px, 3.4vw, 38px);
  }

  > p {
    margin-top: 14px;
    color: rgba(255, 255, 255, 0.75);
  }

  ${media.phone} {
    padding: 32px 20px;
  }
`;

export const Channels = styled.div`
  display: grid;
  gap: 12px;
  margin-top: 32px;
`;

export const Channel = styled.a`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  border-radius: ${radius.md};
  background: rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  color: #fff;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
    transform: translateX(4px);
  }

  img {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 12px;
    background: #fff;
    object-fit: contain;
    flex-shrink: 0;
  }

  small {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
  }

  strong {
    display: block;
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.01em;
  }

  > svg {
    margin-left: auto;
    opacity: 0.5;
  }
`;

export const Legal = styled.p`
  margin-top: 28px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
`;

export const Form = styled.form`
  padding: 48px;
  display: grid;
  gap: 18px;
  align-content: start;

  h3 {
    font-size: 24px;
  }

  > p {
    margin-top: -8px;
    font-size: 15px;
  }

  ${media.phone} {
    padding: 32px 20px;
  }
`;

export const Field = styled.label<{ invalid?: boolean }>`
  display: grid;
  gap: 8px;

  span {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.ink};
  }

  input,
  textarea {
    width: 100%;
    padding: 14px 16px;
    border-radius: 12px;
    border: 1.5px solid ${(p) => (p.invalid ? colors.danger : colors.line)};
    background: ${colors.surfaceAlt};
    color: ${colors.ink};
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;

    &::placeholder {
      color: ${colors.muted};
    }

    &:focus {
      background: #fff;
      border-color: ${(p) => (p.invalid ? colors.danger : colors.blue)};
      box-shadow: 0 0 0 4px ${(p) => (p.invalid ? "rgba(229, 72, 77, 0.12)" : "rgba(59, 108, 255, 0.12)")};
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  em {
    font-style: normal;
    font-size: 13px;
    font-weight: 600;
    color: ${colors.danger};
  }
`;

export const Notice = styled.div<{ tone: "success" | "error" }>`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  color: ${(p) => (p.tone === "success" ? "#0f7a3f" : "#b4232a")};
  background: ${(p) => (p.tone === "success" ? "#e7f8ee" : "#fdecec")};
`;
