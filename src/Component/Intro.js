import {Col, Container, Row, Button} from "react-bootstrap"

const Intro = () => {
    return (
        <div className='intro'>
          <Container className='text-white d-flex justify-content-center align-items-center'>
            <Row>
              <Col>
              <div className='title'>NONTON SEPUASNYA</div>
              <div className='title'>TANPA BAYAR</div>
              <div className="introButton mt-4 text-center">
                <Button variant="light" href="#Trending">Pilih Film Disini</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
        
    )
}

export default Intro