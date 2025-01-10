import { Row, Col, List } from "antd"
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import { SvgIcon } from "../../common/SvgIcon";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const data = [
  {
    href: "tel:+375295886248",
    src: "mts.svg",
    text: "Телефон(МТС)"
  },
  {
    href: "tel:+375299664886",
    src: "a1.svg",
    text: "Телефон(А1)"
  },
  {
    href: "viber://chat?number=%2B375295886248",
    src: "viber.svg",
    text: "Viber"
  },
  {
    href: "https://t.me/alextvsat",
    src: "telegram.svg",
    text: "Telegram"
  },
];

const Contact = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id="contact">
      <Row justify="space-between" align="middle">
        <Col lg={10} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title="Как связаться со мной?" content="Заполните эту форму для отправки запроса. Я свяжусь с вами в ближайшее время после его получения." />
            <FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  label="Имя"
                  placeholder="Ваше имя"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="phone"
                  label="Телефон"
                  placeholder="Ваш номер телефона"
                  value={values.phone || ""}
                  onChange={handleChange}
                />
                <ValidationType type="phone" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Опишите Вашу проблему (необязательно)"
                  value={values.message || ""}
                  name="message"
                  label="Сообщение"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <Button name="submit">Отправить</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
        <Col lg={10} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <Block title="Мои контакты" />
            <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<SvgIcon src={item.src} width="35px" height="35px" />}
                    title={
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={item.src}
                        aria-label={item.src}
                      >
                        <p>{item.text}</p>
                      </a>
                    }
                  />
                </List.Item>
              )}
            />
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
