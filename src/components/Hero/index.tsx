import { hero, phones } from "../../content/site";
import Icon from "../Icon";
import { Container, GhostButton, PrimaryButton } from "../Section";
import {
  Badge,
  Buttons,
  FloatCard,
  FloatIcon,
  Grid,
  Highlights,
  Lead,
  Screen,
  ScreenMark,
  Stand,
  Title,
  Tv,
  Visual,
  Wrapper,
} from "./styles";

const Hero = () => (
  <Wrapper id="top">
    <Container>
      <Grid>
        <div>
          <Badge>
            <Icon name="pin" size={16} />
            {hero.badge}
          </Badge>
          <Title>
            Ремонт телевизоров <span>в&nbsp;Новогрудке</span> и&nbsp;районе
          </Title>
          <Lead>{hero.text}</Lead>
          <Buttons>
            <PrimaryButton href={phones[0].href}>
              <Icon name="phone" size={18} />
              Позвонить мастеру
            </PrimaryButton>
            <GhostButton href="#contact">
              Оставить заявку
              <Icon name="arrowRight" size={18} />
            </GhostButton>
          </Buttons>
          <Highlights>
            {hero.highlights.map((item) => (
              <li key={item}>
                <Icon name="check" size={18} strokeWidth={3} />
                {item}
              </li>
            ))}
          </Highlights>
        </div>
        <Visual aria-hidden="true">
          <FloatCard pos="right" delay={0.8}>
            <FloatIcon tone="orange">
              <Icon name="truck" size={20} />
            </FloatIcon>
            <div>
              <strong>Выезд на дом</strong>
              <small>по Новогрудку и району</small>
            </div>
          </FloatCard>
          <Tv>
            <Screen>
              <ScreenMark>
                <div>
                  <Icon name="check" size={30} strokeWidth={3} />
                </div>
                Снова как новый
              </ScreenMark>
            </Screen>
          </Tv>
          <Stand />
          <FloatCard pos="left">
            <FloatIcon tone="green">
              <Icon name="shield" size={20} />
            </FloatIcon>
            <div>
              <strong>Гарантия</strong>
              <small>на все работы</small>
            </div>
          </FloatCard>
        </Visual>
      </Grid>
    </Container>
  </Wrapper>
);

export default Hero;
