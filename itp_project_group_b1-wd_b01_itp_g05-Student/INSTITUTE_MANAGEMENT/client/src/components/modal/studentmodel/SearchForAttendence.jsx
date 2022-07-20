import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import '../../../style.css'
import Attendence from '../../../pages/Attendence';
import Header from '../../Header';

export default function SearchForAttendence() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [subjects, setSubjects] = useState('');
    
  return (
    <>
        <Header/>
        <br/><br/><br/><br/>
        <div className='row justify-content-center' >
            <Button variant='success' onClick={handleShow} style = {{width:"30%"}}>
                Mark Attendence
            </Button>
        </div>

        <Modal show={show}        
            size="lg"
            centered
        >
            <Modal.Header>
            <div class="col-md-12 text-center">
            <Modal.Title id="contained-modal-title-vcenter">Search Student Id</Modal.Title>
            </div>
            </Modal.Header>
            <Modal.Body>

       

    <fieldset>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
    <Col sm={20}>
    <div class="col-md-12 text-center">
    <Form.Label>
    Subject:
    </Form.Label>
    </div>
    </Col>
    <Col  sm={10}>
    <Form.Control  type="text" onChange={(e)=>{setSubjects(e.target.value)}}></Form.Control> 
    </Col>
    </Form.Group>
    </fieldset>
 

    </Modal.Body>
        <Modal.Footer>
        <Attendence subjects={subjects}/>
        <Button variant="danger" onClick={handleClose}>
            Cancel
        </Button>
        
        </Modal.Footer>
    </Modal>
    
    </>
  )
}
