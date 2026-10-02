import { useEffect, useState } from "react";
import { company, nav, phones } from "../../content/site";
import Icon from "../Icon";
import { Container } from "../Section";
import { Actions, Bar, Brand, Burger, Drawer, DrawerPhones, Inner, Nav, PhoneLink } from "./styles";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <>
      <Bar solid={solid}>
        <Container>
          <Inner>
            <Brand href="#top" aria-label={`${company.brand} — на главную`} onClick={() => setOpen(false)}>
              <img src="/img/svg/novogrudok.svg" alt="" />
              <div>
                <strong>{company.brand}</strong>
                <small>{company.tagline}</small>
              </div>
            </Brand>
            <Nav aria-label="Основное меню">
              {nav.map((item) => (
                <a key={item.target} href={`#${item.target}`}>
                  {item.label}
                </a>
              ))}
            </Nav>
            <Actions>
              <PhoneLink href={phones[0].href} solid={solid} aria-label={`Позвонить ${phones[0].display}`}>
                <Icon name="phone" size={18} />
                <span>{phones[0].display}</span>
              </PhoneLink>
              <Burger
                type="button"
                aria-label={open ? "Закрыть меню" : "Открыть меню"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <Icon name={open ? "close" : "menu"} size={22} />
              </Burger>
            </Actions>
          </Inner>
        </Container>
      </Bar>
      <Drawer open={open} aria-hidden={!open}>
        {nav.map((item) => (
          <a key={item.target} href={`#${item.target}`} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {item.label}
            <Icon name="arrowRight" size={18} />
          </a>
        ))}
        <DrawerPhones>
          {phones.map((p) => (
            <a key={p.href} href={p.href} tabIndex={open ? 0 : -1}>
              <Icon name="phone" size={18} />
              {p.display}
              <small>{p.operator}</small>
            </a>
          ))}
        </DrawerPhones>
      </Drawer>
    </>
  );
};

export default Header;
