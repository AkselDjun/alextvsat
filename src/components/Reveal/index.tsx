import { ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div<{ visible: boolean; delay: number }>`
  opacity: ${(p) => (p.visible ? 1 : 0)};
  transform: translateY(${(p) => (p.visible ? "0" : "24px")});
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.2, 0.7, 0.2, 1);
  transition-delay: ${(p) => p.delay}ms;
  height: 100%;
`;

interface RevealProps {
  children: ReactNode;
  delay?: number;
  as?: "div" | "li";
}

const Reveal = ({ children, delay = 0, as = "div" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} as={as} visible={visible} delay={delay}>
      {children}
    </Wrapper>
  );
};

export default Reveal;
