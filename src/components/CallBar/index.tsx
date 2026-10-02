import { useEffect, useState } from "react";
import styled from "styled-components";
import { messengers, phones } from "../../content/site";
import { colors, media } from "../../styles/theme";
import Icon from "../Icon";

const Bar = styled.div<{ visible: boolean }>`
  display: none;

  ${media.phone} {
    position: fixed;
    left: 12px;
    right: 12px;
    bottom: calc(12px + env(safe-area-inset-bottom));
    z-index: 40;
    display: flex;
    gap: 8px;
    padding: 8px;
    border-radius: 999px;
    background: rgba(11, 20, 48, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 16px 40px rgba(11, 20, 48, 0.35);
    transform: translateY(${(p) => (p.visible ? "0" : "140%")});
    transition: transform 0.3s ease;
  }
`;

const Call = styled.a`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 48px;
  border-radius: 999px;
  background: ${colors.accent};
  color: #fff;
  font-weight: 700;

  &:hover {
    color: #fff;
  }
`;

const Round = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;

  img {
    width: 26px;
    height: 26px;
  }
`;

const CallBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Bar visible={visible} aria-hidden={!visible}>
      <Call href={phones[0].href} tabIndex={visible ? 0 : -1}>
        <Icon name="phone" size={18} />
        Позвонить мастеру
      </Call>
      {messengers.map((m) => (
        <Round
          key={m.name}
          href={m.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={m.name}
          tabIndex={visible ? 0 : -1}
        >
          <img src={`/img/svg/${m.icon}`} alt="" />
        </Round>
      ))}
    </Bar>
  );
};

export default CallBar;
