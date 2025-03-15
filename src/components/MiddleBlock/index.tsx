import { Row, Col, Card } from "antd";
import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection } from "./styles";
import { SvgIcon } from "../../common/SvgIcon";
import styled from "styled-components";

const StyledCard = styled(Card)`
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
    
  .ant-card-body {
    padding: 20px;
  }
  .ant-card-meta-title {
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .ant-card-meta-description {
    font-size: 14px;
    color: #555;
  }
`;


const data = [
  {
    title: "Ремонт ЖК , LED телевизоров",
    content: "Основную часть ремонтов составляют ЖК и LED телевизоры. Устраняем проблемы с подсветкой, изображением, антенным гнездом, прошивкой и т.д.",
    icon: 'tv',
  },
  {
    title: "Спутниковое и цифровое телевидение",
    content: "Ремонт, настройка и установка спутниковых антенн, оборудования для цифрового ТВ, а также ремонт и прошивка тюнеров.",
    icon: 'satellite',
  },
  {
    title: "Скупка телевизоров на запчасти",
    content: "Покупаем телевизоры на ЗАПЧАСТИ. ЖК, LED, LCD – можно с разбитой матрицей, экраном; залитые водой и другими дефектами.",
    icon: 'parts',
  }
];

const MetaDescription = (description: string) => (
  <div style={{ lineClamp: 3 }}>{description}</div>
);

const MiddleBlock = () => (
    <MiddleBlockSection id="services">
      <Slide direction="up" triggerOnce>
        <Row justify="space-between" align="middle" gutter={[32, 32]}>
          {data.map(({ title, content, icon }, index) => (
            <Col lg={8} md={12} sm={24} xs={24} key={index}>
              <StyledCard
                hoverable
                size="default"
                cover={<SvgIcon style={{ margin: '5px 0' }} src={`${icon}.svg`} width="150px" height="150px" />}
              >
                <Card.Meta style={{ textAlign: "center" }} title={title} description={MetaDescription(content)} />
              </StyledCard>
            </Col>
            ))}
        </Row>
      </Slide>
    </MiddleBlockSection>
);

export default MiddleBlock;
