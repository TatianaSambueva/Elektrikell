import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';


function Logo() {
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Col> Logo
            </Col>

            <Col className='text-end'>

                <Button variant="secondary" onClick={handleShow}>
                    Search
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Choose your time period </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="fromDate">
                                <Form.Label>From</Form.Label>
                                <Form.Control type="data" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="untilDate">
                                <Form.Label>Until</Form.Label>
                                <Form.Control type="data" />
                            </Form.Group>
                            <Button type="submit">Search</Button>
                        </Form>
                    </Offcanvas.Body>
                </Offcanvas>
            </Col >
        </>);
}

export default Logo;