import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "/src/component/clientReview/Clientreview.css";

export default function Client() {

    return (
        <section className='client'>
           <h2 className='clientHeader'> What Client Says </h2>
           <p className='clientContent'>👋 Hey there! Here is our daily client feedback</p>


    <Container>
      <Row>

        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/follow_1.png" />
      <Card.Body>
        <Card.Title>Kelvin Baker</Card.Title>
        <Card.Text>
        The key is when a customer walks away, thinking, 
        </Card.Text>
        <Button> 👍 </Button>
      </Card.Body>
    </Card>
        </Col>


        <Col className='middle'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/follow_2.png" />
      <Card.Body>
        <Card.Title>Dabomb Mari</Card.Title>
        <Card.Text>
        Treat the customer like you would want to be treated. Period!
        </Card.Text>
         <Button> 👍 </Button>
      </Card.Body>
    </Card>
        </Col>


        <Col>
                   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="public/follow_4.png" />
      <Card.Body>
        <Card.Title>mikaela tania</Card.Title>
        <Card.Text>
        Just having satisfied customers isn’t good enough anymore.
        </Card.Text>
         <Button> 👍 </Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
        </section>
    )
}