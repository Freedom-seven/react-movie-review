import React from "react";
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Movie = ({movie}) => {
  return (
    <div>
      <Container className="mb-5">
        <Row>
          <Col sm="12" md="12" lg="12">
          <Card>
  <Card.Img variant="top" src={movie.multimedia.src} />
  <Card.Body>
    <h5>{movie.display_title}</h5>
    <Card.Text>
    <Card.Title>{movie.headline}</Card.Title>
      {movie.summary_short}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{movie.byline}</ListGroupItem>
    <ListGroupItem>{movie.critics_pick}</ListGroupItem>
    <ListGroupItem>{movie.publication_date}</ListGroupItem>
  </ListGroup>
  </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}; 

export default Movie;
