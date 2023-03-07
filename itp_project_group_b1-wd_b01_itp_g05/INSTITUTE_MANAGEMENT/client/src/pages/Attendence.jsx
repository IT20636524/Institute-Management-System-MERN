import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form, ModalBody } from "react-bootstrap";
import axios from'axios';
import '../style.css'
import AttendenceModal from '../components/modal/studentmodel/AttendenceModal';
import swal from 'sweetalert';



export default function Attendence(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [student_id , setStudentId] = useState("");
  const [name , setName] = useState("");
  const [attendence, setAttendence ]= useState("");
  const [subjects,setSubjects]=useState(props.subjects);
  const [optsub, setSub] = useState([]);
  const[students,setStudents]=useState([]);

  const attendenceData ={
    subjects,
    student_id,
    name,
    attendence,
  }

  const updateShow = () => {
    console.log(props.subjects)
    setSubjects(props.subjects)
  axios.get("http://localhost:5000/api/students/subst/"+props.subjects).then(function(response) {
    console.log(response);
    // setStudentId(response.data['student_id']);
    // setName(response.data['name']);
    setStudents(response.data);
    setShow("true")
  }).catch(function(error) {
    console.log(error);
    alert('Invalid Payment Id')
  });
  };

 async function submitF(){
    console.log(22,attendenceData);
    await axios.get("http://localhost:5000/api/students/subst/"+props.subjects)
    .then(function (response) {
      console.log(response);
      setStudentId(response.data['student_id']);
      setName(response.data['name']);
      // setStudents(response.data);
      setShow(false);
    })
    .catch(function (error) {
      console.log(error);
      alert("invalid")

    });
  }


  

 async function submitForm(e,index){
    e.preventDefault();
    console.log(students[index]);
    
    const newData ={
      subjects:props.subjects,
      student_id:students[index].student_id,
      name:students[index].name,
      attendence,
    }
    await axios.post(`http://localhost:5000/api/attendences/addAttendence`,newData)
    .then(function (response) {
     console.log(response);
      setSubjects(response.data);
      setStudentId(students.student_id);
      setName(students.name);
      setAttendence('');
      swal({ text: "Successfully Added", icon: "success", button: "Okay!"})

    })
    .catch(function (error) {
      console.log(error);
    });
  }

 

    // useEffect(function(){ 
    //   axios.get("http://localhost:5000/api/students/subst/"+props.subjects)
    //     .then((response) =>{
    //     setStudents(response.data)
    //     console.log(response)})
        
    //     .then((error) =>console.log(error));

    // },[]);

    // useEffect(() => {
    //   axios.get("http://localhost:5000/api/students/subst/"+props.subjects).then(response=> {
    //     setStudents(response.data);
    //     console.log(response.data);
        
    //   })
    //       .catch(err => {
    //           console.log(err);
    //       })
    //   })
   
    
    
    // axios.get(`http://localhost:5000/api/students/subst/`+props.subjects,attendenceData)
    // .then(function (response) {
    //    console.log(response);
    //     setStudents(response.data)
    //     setStudentId(response.data['student_id'])
    //     setName(response.data['name'])

    //   })
    // .catch(function (error) {
    //     console.log(error);
    //     // alert(" details not added " );      
    //   })
   

    


  return (
    <>
      <Button className='primary' onClick={updateShow}>
        Mark Attendence
      </Button>

        {/* <Modal.Header>
      
          <Modal.Title id="contained-modal-title-vcenter">Mark Attendence</Modal.Title>
           
        </Modal.Header> */}
        
  {/* <Form onSubmit={submitForm}> */}
  
  {/* Table */}
  <Modal show={show}        
        size="lg"
        centered
      >
  <Modal.Body>

  <Form  >
        <fieldset>
    <div>
      {/* <input placeholder="Search" /> */}
        <center><h2>Mark Attendence</h2></center>

        <table className="table table-striped styled-table ">
            <thead className="thead-dark" >
                <tr>
                    <th scope="col">Student Id</th>
                    <th scope="col">Student Name</th>
                    <th scope="col">Attendence</th>
                    <th className="text-center" scope="col">Actions</th>
            
                </tr>
            </thead>
  
            <tbody>

            {
                students.map((students,index) => <tr key={students.student_id} >
                    <td ><input type="text" placeholder="Enter your Student Id " value={students.student_id} /></td>
                    <td ><Form.Control type="text" placeholder="Enter your Full Name " value={students.name}  /></td>
                    <td >
                    {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                        <Form.Label as="legend" column sm={1}>
                        </Form.Label>
                        <Form.Check
                        inline
                        label="Yes"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        value="Yes"
                        onChange={(e)=>{setAttendence(e.target.value)}}
                        />
                        <Form.Check
                        inline
                        label="No"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        value='No'
                        onChange={(e)=>{setAttendence(e.target.value)}}
                        />
                    </div>
                    ))}
                    </td>
                    <td><Button type='button' onClick={(e)=>submitForm(e,index)}>Add</Button></td>
                    
                </tr>
                
                )
                
            }
            </tbody>  
        </table>
    </div>
    </fieldset>
      </Form>
      
      </Modal.Body>
      <Modal.Footer>
      <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          </Modal.Footer>
      </Modal>
      
 
    </>
  );
}
