import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
    return(<footer>
        <Container>
            <Row>  
                <Col className= 'text-center py-3'> {/* py-3 is use to give padding */}
                    {/* &copy is used to give copyright trademark sign.*/}
                    Copyright &copy; Unique Clothes  
                    </Col>
            </Row>
        </Container>
        </footer>
    )
}

export default Footer