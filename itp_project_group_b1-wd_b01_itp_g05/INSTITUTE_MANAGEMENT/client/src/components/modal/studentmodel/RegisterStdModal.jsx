import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';
import axios from 'axios';
import "../../../style.css"
import swal from 'sweetalert';
import { useState, useEffect } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import ReactDOM from 'react-dom/client';
import ColorCheckboxes from './CheckBoxes.tsx';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function RegisterStdModel(props) {
  const [show, setShow] = useState(false);

  const [name , setname] = useState("");
  const [age , setAge] = useState("");
  const [gender , setGender] = useState("");
  const [exam_year , setExamYear] = useState("");
  const [exam , setExam] = useState("");
  const [school , setSchool] = useState("");
  const [phone_number , setMnumber] = useState("");
  const [address , setAddress] = useState("");
  const [email_address , setEmail] = useState("");
  const [grade , setGrade] = useState("");
  const[subjects,setSubjects] = useState([]);
  const [username , setUserName] = useState("");
  const [password , setPassword] = useState("");
  const [profile_pic , setProfilepic] = useState("");
  const [file, setFile] = useState(null);
  const [checked, setChecked] = useState([false, false, false, false, false]);

  const handleChange = e => {

    if (e.target.checked === true) {
      setSubjects([...subjects, e.target.value]);
    } else {
      const selectedAcc = subjects.filter(a => {
        if (a === e.target.value) return false;
        return true;
      });
      setSubjects([...selectedAcc]);
    }
    // console.log(subjects);
  };

  const studentData ={
    name ,
    age ,
    gender,
    address ,
    school ,
    exam_year ,
    email_address,
    grade,
    subjects,
    phone_number,
    username ,
    password,
    profile_pic
  }
  if (file) {
    const data =new FormData();
    const filename = Date.now() + file.name;
    data.append("name", filename);
    data.append("file", file);
    studentData.profile_pic = filename;
    try {
      axios.post("/upload", data);
    } catch (err) {}
  }

  function submitForm(e){
    e.preventDefault();
    if(name.length === 0 || age.length === 0 || gender.length === 0 || address.length === 0 || school.length === 0 || exam_year.length === 0 || email_address.length === 0 || grade.length === 0 || subjects.length === 0 || phone_number.length === 0 || username.length === 0 || password.length === 0 ){
      swal(" Fields Cannot empty !","Please enter all data !", "error");
    }else{
      console.log(studentData);
      axios.post('http://localhost:5000/api/StudentAuth/register', studentData)
      .then(function (response) {
        console.log(response);
        setname('');
        setAge('');
        setGender('');
        setExamYear('');
        setExam('');
        setSchool('');
        setMnumber('');
        setAddress('');
        setEmail('');
        setGrade('');
        setSubjects('');
        setUserName('');
        setPassword('');
        setProfilepic('');
        swal({ text: "Successfully Added", icon: "success", button: "Okay!"})
      })
      .catch(function (error) {
        console.log(error);
        alert("not added");
      });
    }
    
  }

  //Demo Button
  function demoData(e){ 
        setname('Dinandi');
        setAge('21');
        setExamYear('2020');
        setSchool('AMCC');
        setMnumber('0778564231');
        setAddress('Balangoda');
        setEmail('d@gmail.com');
        setGrade('13');
        setUserName('S008');
        setPassword('123');
  } 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className='btn-dashb me-5' onClick={handleShow}>
        Create Student
      </Button>

      <Modal show={show}        
        size="lg"
        centered
      >
        <Modal.Header>
        <div class="col-md-12 text-center">
          <Modal.Title id="contained-modal-title-vcenter">Student Register</Modal.Title>
        </div>   
        </Modal.Header>

        <Form onSubmit={submitForm}>
        <Modal.Body>

          <Button variant='success' onClick={demoData}>Demo</Button>
        
        <Form.Group  className="p-2 bd-highlight d-flex flex-column justify-content-center" >      
            <MDBCol  className='mb-4'>
              {file && (
                <img className='img-fluid rounded' src={URL.createObjectURL(file)} alt="" style={{width:'200px',height:'250px', marginLeft:"250px"}} /> 
              )} 
            </MDBCol>       
        </Form.Group>

        <Form.Group as={Row} className="mb-3" >
          <Form.Label column sm="3">
            Select Student Profile picture
          </Form.Label>
          <Col sm="7">
            <Form.Control type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} required/>
          </Col>
        </Form.Group>

        

    

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Full Name  
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your Full Name " value={name} onChange={(e)=>{setname(e.target.value)}}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      Age
      </Form.Label>
      <Col sm="5">
        <Form.Control type="text" placeholder="Enter your age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
      </Col>
    </Form.Group>

    <Form>
    {['radio'].map((type) => (
      <div key={`inline-${type}`} className="mb-3">
        <Form.Label as="legend" column sm={2}>
        Gender
        </Form.Label>
        <Form.Check
          inline
          label="Male"
          name="group1"
          type={type}
          id={`inline-${type}-1`}
          value="Male"
          onChange={(e)=>{setGender(e.target.value)}}
        />
        <Form.Check
          inline
          label="Female"
          name="group1"
          type={type}
          id={`inline-${type}-2`}
          value="Female"
          onChange={(e)=>{setGender(e.target.value)}}
        />
      </div>
    ))}
  </Form>

    
    <fieldset>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Exam Year
      </Form.Label>
      <Col sm="5">
        <Form.Control type="text" placeholder="Enter your Exam Year " value={exam_year} onChange={(e)=>{setExamYear(e.target.value)}}/>
      </Col>
      </Form.Group>
    </fieldset>


    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      School
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your School" value={school} onChange={(e)=>{setSchool(e.target.value)}}/>
      </Col>
    </Form.Group>


    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Email Address 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="Email" placeholder="Enter your  Email Address" value={email_address} onChange={(e)=>{setEmail(e.target.value)}}/>
      </Col>
    </Form.Group>


    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Address 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="textarea" placeholder="Enter your Address" value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
      <Form.Label column sm="2">
      Phone Number
      </Form.Label>
      <Col sm="7">
        <Form.Control type="tel" placeholder="Enter your Phone Number" maxLength="10" value={phone_number} onChange={(e)=>{setMnumber(e.target.value)}}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Grade 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your Grade" value={grade} onChange={(e)=>{setGrade(e.target.value)}}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Subjects
              </Form.Label>
              <Col sm="7">


                <FormControlLabel
                  label="Sinhala"
                  control={<Checkbox checked={
                    subjects.lastIndexOf('Sinhala') >= 0 ? true : false
                  } onChange={e => handleChange(e)} />}
                  value="Sinhala"
                />


                <FormControlLabel
                  label="Science"
                  control={<Checkbox  checked={
                    subjects.lastIndexOf('Science') >= 0 ? true : false
                  } onChange={e => handleChange(e)} />}
                  value="Science"
                />

                <FormControlLabel
                  label="Mathematics"
                  control={<Checkbox checked={
                    subjects.lastIndexOf('Mathematics') >= 0 ? true : false
                  } onChange={e => handleChange(e)} />}
                  value="Mathematics"
                />

                <FormControlLabel
                  label="ICT"
                  control={<Checkbox checked={
                    subjects.lastIndexOf('ICT') >= 0 ? true : false
                  } onChange={e => handleChange(e)} />}
                  value="ICT"
                />

                <FormControlLabel
                  label="English"
                  control={<Checkbox checked={
                    subjects.lastIndexOf('English') >= 0 ? true : false
                  } onChange={e => handleChange(e)} />}
                  value="English"
                />

              </Col>
            </Form.Group>
    
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      User Name 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your UserName" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
      </Col>
    </Form.Group>
    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
      <Form.Label column sm="2">
      Password 
      </Form.Label>
      <Col sm="7">
        <Form.Control type="text" placeholder="Enter your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Col>
    </Form.Group>
 


      </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type="submit" onClick={handleClose}>
            Create Student
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
         
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}