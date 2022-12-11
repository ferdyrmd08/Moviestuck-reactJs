import {Card} from 'react-bootstrap';
import { Container, Col, Row, Image } from 'react-bootstrap';
import blackadamIMAGES from "../Assets/IMAGES/Superhero/Black Adam.jpg"
import moonknightIMAGES from "../Assets/IMAGES/Superhero/moonknight.jpg"
import doctorstrangeIMAGES from "../Assets/IMAGES/Superhero/Doctor Strange.jpeg"
import shehulkIMAGES from "../Assets/IMAGES/Superhero/She Hulk.jpg"
import thorIMAGES from "../Assets/IMAGES/Superhero/Thor.jpg"
import batmanIMAGES from "../Assets/IMAGES/Superhero/The Batman.jpg"

const Superhero = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className='trendingtitle text-white'>SUPERHERO MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper' id="Superhero">
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={blackadamIMAGES} alt="Black Adams" className='Images' />
                     <Card.Title>Black Adam</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                    <Col md={4} className='movieWrapper' >
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={moonknightIMAGES} alt="Moon Knight" className='Images' />
                     <Card.Title>Moon Knight</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                    <Col md={4} className='movieWrapper' >
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={doctorstrangeIMAGES} alt="Doctor Strange" className='Images' />
                     <Card.Title>Doctor Strange</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                    <Col md={4} className='movieWrapper' >
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={shehulkIMAGES} alt="She Hulk" className='Images' />
                     <Card.Title>She Hulk</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                    <Col md={4} className='movieWrapper' >
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={batmanIMAGES} alt="Batman" className='Images'/>
                     <Card.Title>The Batman</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                    <Col md={4} className='movieWrapper' >
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={thorIMAGES} alt="Thor" className='Images'/>
                     <Card.Title>Thor Love Thunder</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                </Row>
            </Container>
        
        </div>
    )
}

export default Superhero