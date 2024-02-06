import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

interface DestinationProps {
  title: string;
  description: string;
  imageUrl: string;
}

function DestinationCard({ title, description, imageUrl }: DestinationProps) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card>
  );
}

function Destinations() {
  return (
    <Row>
      <Col>
        <DestinationCard
          title="Mars Oasis"
          description="Experience the red landscapes of Mars..."
          imageUrl="mars-image-url"
        />
      </Col>
      {/* More destinations */}
    </Row>
  );
}

export default Destinations;
