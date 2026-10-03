import { messengers, phones } from "../../content/site";
import { useContactForm } from "../../hooks/useContactForm";
import Icon from "../Icon";
import Reveal from "../Reveal";
import { Container, Eyebrow, Section, SubmitButton } from "../Section";
import { Card, Channel, Channels, Field, Form, Honeypot, Info, Notice } from "./styles";

const channels = [
  ...phones.map((p) => ({ href: p.href, icon: p.icon, label: `Телефон ${p.operator}`, value: p.display, external: false })),
  ...messengers.map((m) => ({ href: m.href, icon: m.icon, label: m.name, value: m.display, external: true })),
];

const Contact = () => {
  const { values, errors, status, handleChange, handleSubmit } = useContactForm();

  return (
    <Section id="contact">
      <Container>
        <Reveal>
          <Card>
            <Info>
              <Eyebrow>Контакты</Eyebrow>
              <h2>Как связаться со мной?</h2>
              <p>Позвоните или напишите в удобный мессенджер. Можно также оставить заявку, и я перезвоню.</p>
              <Channels>
                {channels.map((c) => (
                  <Channel
                    key={c.href}
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <img src={`/img/svg/${c.icon}`} alt="" />
                    <div>
                      <small>{c.label}</small>
                      <strong>{c.value}</strong>
                    </div>
                    <Icon name="arrowRight" size={18} />
                  </Channel>
                ))}
              </Channels>
            </Info>
            <Form noValidate onSubmit={handleSubmit}>
              <h3>Оставить заявку</h3>
              <p>Заполните форму, и я свяжусь с вами в ближайшее время после её получения.</p>
              <Field invalid={!!errors.name}>
                <span>Имя</span>
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Как к вам обращаться"
                  value={values.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <em>{errors.name}</em>}
              </Field>
              <Field invalid={!!errors.phone}>
                <span>Телефон</span>
                <input
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+375 29 123-45-67"
                  value={values.phone}
                  onChange={handleChange}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <em>{errors.phone}</em>}
              </Field>
              <Field>
                <span>Сообщение</span>
                <textarea
                  name="message"
                  placeholder="Опишите проблему (необязательно)"
                  value={values.message}
                  onChange={handleChange}
                />
              </Field>
              <Honeypot aria-hidden="true">
                <input name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
              </Honeypot>
              {status === "success" && (
                <Notice tone="success" role="status">
                  <Icon name="check" size={20} strokeWidth={3} />
                  Спасибо! Заявка отправлена, я скоро свяжусь с вами.
                </Notice>
              )}
              {status === "error" && (
                <Notice tone="error" role="alert">
                  Не удалось отправить заявку. Попробуйте ещё раз или позвоните по телефону {phones[0].display}.
                </Notice>
              )}
              <SubmitButton type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Отправляем…" : "Отправить заявку"}
                <Icon name="send" size={18} />
              </SubmitButton>
            </Form>
          </Card>
        </Reveal>
      </Container>
    </Section>
  );
};

export default Contact;
