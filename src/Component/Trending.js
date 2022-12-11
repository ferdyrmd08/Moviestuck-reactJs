import { Card, Container, Col, Row, Image } from 'react-bootstrap';
import topgunIMAGES from "../Assets/IMAGES/Trending/topgun.jpg"
import wakandaIMAGES from "../Assets/IMAGES/Trending/wakanda.jpg"
import graymanIMAGES from "../Assets/IMAGES/Trending/grayman.jpg"
import minionIMAGES from "../Assets/IMAGES/Trending//minion.jpg"
import avatarIMAGES from "../Assets/IMAGES/Trending/avatar.jpg"
import invitationIMAGES from "../Assets/IMAGES/Trending/invitation.jpg"

const Trending = () => {
    return (
        <div>
            <Container>
                <br />
                <h1 className='trendingtitle text-white'>TRENDING MOVIES</h1>
                <br />
                <Row>
                    <Col md={4} className='movieWrapper' id="Trending" >
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={topgunIMAGES} alt="Top Gun" className='Images' />
                     <Card.Title>Top Gun</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                    <Col md={4} className='movieWrapper' >
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={graymanIMAGES} alt="Gray Man" className='Images'/>
                     <Card.Title>Gray Man</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                    <Col md={4} className='movieWrapper' >
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={wakandaIMAGES} alt="Wakanda" className='Images' />
                     <Card.Title>Wakanda Forever</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                    <Col md={4} className='movieWrapper' >
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={minionIMAGES} alt="Minion" className='Images' />
                     <Card.Title>Minion</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                    <Col md={4} className='movieWrapper' >
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={avatarIMAGES} alt="Avatar" className='Images'/>
                     <Card.Title>Avatar</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                    <Col md={4} className='movieWrapper' >
                    <Card className="text-dark text-center movieIMAGES">
                    <Image src={invitationIMAGES} alt="Invitation" className='Images'/>
                     <Card.Title>Invitation</Card.Title>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card>
                    </Col>
                </Row>
            </Container>
        
        </div>
    )
}

export default Trending