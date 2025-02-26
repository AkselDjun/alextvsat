import { Col, List, Collapse } from "antd"
import { Fade } from "react-awesome-reveal";
import React from 'react';

import { ContentBlockProps } from "./types";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  ContentWrapper,
  StyledRow,
} from "./styles";
import { Icon } from "../../common/Icon"

const { Panel } = Collapse;

const aboutData = [
  {
    icon: "mechanic",
    title: "Выезд мастера и диагностика проводятся бесплатно",
    description: "Мы экономим не только время, но и деньги заказчиков, поэтому оказываем ряд услуг на безвозмездной основе..",
  },
  {
    icon: "clock",
    title: "Быстрое и качественное обслуживание",
    description: "Мы гарантируем быстрое и эффективное выполнение всех работ. Наши специалисты всегда готовы приехать в удобное для вас время и быстро решить любые проблемы с антеннами и телевизорами.",
  },
  {
    icon: "dollar",
    title: "Доступные цены и гарантия на работы",
    description: "Мы предлагаем конкурентоспособные цены на все наши услуги без скрытых платежей. Кроме того, мы предоставляем гарантию на все выполненные работы.",
  },
  {
    icon: "smile",
    title: "Персонализированный подход к каждому клиенту",
    description: "Мы ценим каждого клиента и стараемся предоставить индивидуальный подход к решению всех ваших проблем с телевизионной техникой. Ваше удовлетворение — наш приоритет.",
  }
];

const defineData = [
  {
    "title": "Подсветка",
    "description": "Экран остается темным, но звук есть, или изображение появляется и сразу исчезает. Чаще всего причина — выход из строя светодиодов или цепи питания подсветки. Требуется замена неисправных элементов или всей подсветки."
  },
  {
    "title": "Блок питания",
    "description": "Телевизор не включается, выключается самопроизвольно, индикатор не горит или мигает. Причина может быть в перегоревших конденсаторах, трансформаторе или цепи питания. Необходима диагностика и ремонт блока питания."
  },
  {
    "title": "Матрица",
    "description": "На экране появляются полосы, пятна, искажения или полностью отсутствует изображение. Повреждения чаще всего вызваны ударом, попаданием жидкости или заводским дефектом. В таких случаях матрица подлежит замене."
  },
  {
    "title": "Материнская плата",
    "description": "Телевизор не реагирует на команды, не работают входы, возникают проблемы с настройками. Причиной могут быть перегрев, замыкание или сбои в микросхемах. Требуется ремонт или замена платы."
  },
  {
    "title": "Тюнер",
    "description": "Телевизор не ловит каналы, теряет сигнал или показывает слабое изображение. Возможные причины — поломка самого тюнера, неисправность прошивки или проблемы с антенной. Решается заменой тюнера или его перепрошивкой."
  },
  {
    "title": "Сбои программного обеспечения",
    "description": "Телевизор зависает, перезагружается или некорректно работает Smart TV. Возможные причины — ошибки прошивки, вирусы или сбой в системных файлах. Решается перепрошивкой или сбросом настроек."
  }
];

const ContentBlock = ({
  icon,
  id,
  direction,
}: ContentBlockProps) => {

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={10} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width={"85%"} height={"85%"} />
          </Col>
          <Col lg={10} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{id === "about" ? "Почему выбирают нас?" : "Основные неисправности телевизоров"}</h6>
              {id === "defect" && (
                <Collapse>
                  {defineData.map(({ title, description }, index) => (
                    <Panel header={<p style={{ margin: 0 }}>{title}</p>} key={index} showArrow>
                      <p>{description}</p>
                    </Panel>
                  ))}
                </Collapse>
              )}
              {id === "about" && (
                <List
                  itemLayout="horizontal"
                  dataSource={aboutData}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Icon src={item.icon} />}
                        title={<p>{item.title}</p>}
                        description={item.description}
                      />
                    </List.Item>
                  )}
                />
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;
