import { Row, Col, Container, Card, Button } from 'react-bootstrap';
import "../App.css";
import portalItems from '../data/portalItems';


export default function Portal() {

    return (
        <Container id="Portal" className="Portal-container" style={{ padding: 20, marginTop: 180, marginBottom: 300 }}>
            <div data-aos="fade-up" className="Portal">
                <h4>Portal</h4>
                <div className="Portal-grid">
                    <Row xs={1} md={3} className="g-4">
                        {Object.keys(portalItems).map((value, idx) => (
                            <Col key={idx}>
                                <Card className="Portal-item" style={{ marginLeft: 20 }}>
                                    <Card.Img variant="top" src={portalItems[value].image} />
                                    <Card.Body>
                                        <Card.Title>{portalItems[value].title}</Card.Title>
                                        <Card.Text>
                                            {portalItems[value].detail}
                                        </Card.Text>
                                        <Card.Link href={portalItems[value].link} target="_blank">
                                            <Button variant="warning">
                                                Let's go
                                            </Button>
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </Container>
    );
}