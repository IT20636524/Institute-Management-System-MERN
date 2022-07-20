import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import "../../../style.css"
import axios from 'axios';

export default function AttendenceModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [student_id, setStudentId] = useState("");
  const [name, setName] = useState("");
  const [attendence, setAttendence] = useState("");
  const [subjects, setSubjects] = useState("");

  const attendenceData = {
    subjects,
    student_id: props.student_id,
    name: props.name,
    attendence,
  }

  // const updateShow = () => {
  //   console.log(props.paymentId)
  //   setPaymentId(props.paymentId)
  // axios.get(`http://localhost:8080/api/payments/`+props.paymentId).then(function(response) {
  //   console.log(response);
  //   setEmployeeID(response.data['employee_ID']);
  //   setEmploymentType(response.data['employment_type']);
  //   setName(response.data['name']);
  //   setMonth(response.data['month']);
  //   setSalary(response.data['salary']);
  //   setShow("true")
  // }).catch(function(error) {
  //   console.log(error);
  //   alert('Invalid Payment Id')
  // });
  // };

  function submitForm(e) {
    e.preventDefault();
    // console.log(attendenceData);
    axios.post(`http://localhost:5000/api/attendences/addAttendence`, attendenceData)
      .then(function (response) {
        console.log(response);
        setSubjects('');
        setStudentId('');
        setName('');
        setAttendence('');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Button className='btn btn-primary me-2' type="submit" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show}
        size="lg"
        centered
      >
        <Modal.Header>

          <Modal.Title id="contained-modal-title-vcenter">Add Attendence</Modal.Title>

        </Modal.Header>
        <Modal.Body>


          <Form onSubmit={submitForm}>

            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Student Id :
                  </Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control type="text" value={props.student_id} />
                </Col>

              </Form.Group>
            </fieldset>


            <fieldset>
              <Form.Group as={Row} className="mb-3 " controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Student Name :
                  </Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control type="text" value={props.name} />
                </Col>

              </Form.Group>
            </fieldset>

            <fieldset>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Col sm={2}>
                  <Form.Label>
                    Attendence states:
                  </Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Control type="text" value={props.attendence} />
                </Col>

              </Form.Group>
            </fieldset>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Subject
              </Form.Label>
              <Col sm="5">
                <Form.Control type="date" value={props.subjects} disabled />
              </Col>
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} >
            Cancel
          </Button>
          <Button variant="danger" onClick={handleClose} >
            Cancel
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}