import React from 'react';
import { Card, Rate, Row, Col } from 'antd';
import { ReviewsSection } from "./styles"

const reviews = [
  {
    name: 'Алексей Иванов',
    rating: 5,
    comment: 'Отличный сервис! Очень доволен качеством и скоростью работы.',
    date: '12 января 2025',
  },
  {
    name: 'Мария Смирнова',
    rating: 5,
    comment: 'Хороший опыт, но хотелось бы больше вариантов оплаты.',
    date: '10 января 2025',
  },
  {
    name: 'Иван Петров',
    rating: 5,
    comment: 'Превзошли мои ожидания. Буду рекомендовать друзьям!',
    date: '8 января 2025',
  },
];

const ReviewCard = ({ name, avatar, rating, comment, date }: any) => (
  <Card style={{ marginBottom: 20 }}>
    <Card.Meta
      title={name}
      description={date}
    />
    <Rate disabled defaultValue={rating} style={{ marginTop: 10 }} />
    <p style={{ marginTop: 10 }}>{comment}</p>
  </Card>
);

const ReviewsBlock = () => (
  <ReviewsSection>
    <h6 style={{ textAlign: 'center' }}>Отзывы клиентов</h6>
    <Row gutter={[64, 64]}>
      {reviews.map((review, index) => (
        <Col xs={24} sm={12} md={8} key={index}>
          <ReviewCard {...review} />
        </Col>
      ))}
    </Row>
  </ReviewsSection>
);

export default ReviewsBlock;
