import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Col, Row, Form } from "react-bootstrap";
import { MDBCol } from 'mdb-react-ui-kit';

import StudentSidebar from '../components/StudentSidebar'
import Header from '../components/Header';
import { Context } from '../context/Context';

export default function StudentProfile() {
    const [show, setShow] = useState(false);
    const {user}=useContext(Context);

    // const [profile_pic, setProfilePic] = user.profile_pic;
    const PF = "http://localhost:5000/images/"

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Header />
            <br/><br/><br/><br/>
            <div className="student-profile py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent text-center">
                                    <img className="profile_img" src={PF+user.profile_pic} alt="student dp" />
                                    <h3>{user.name}</h3>
                                </div>
                                <div className="card-body">
                                    <p className="mb-0"><strong className="pr-1">Student ID:</strong>{user.student_id}</p>
                                    <p className="mb-0"><strong className="pr-1">Grade:</strong>{user.grade}</p>
                                    <p className="mb-0"><strong className="pr-1">School:</strong>{user.school}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card shadow-sm">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0"><i className="far fa-clone pr-1"></i>General Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <table className="table table-bordered">
                                        <tr>
                                            <th width="30%">Name</th>
                                            <td width="2%">:</td>
                                            <td>{user.name}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Age	</th>
                                            <td width="2%">:</td>
                                            <td>{user.age}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Gender</th>
                                            <td width="2%">:</td>
                                            <td>{user.gender}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Address</th>
                                            <td width="2%">:</td>
                                            <td>{user.address}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Email</th>
                                            <td width="2%">:</td>
                                            <td>{user.email_address}</td>
                                        </tr>
                                        <tr>
                                            <th width="30%">Phone Number</th>
                                            <td width="2%">:</td>
                                            <td>{user.phone_number}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div style={{"height": "26px"}}></div>
                            {/* <div className="card shadow-sm">
                                <div className="card-header bg-transparent border-0">
                                    <h3 className="mb-0"><i className="far fa-clone pr-1"></i>Other Information</h3>
                                </div>
                                <div className="card-body pt-0">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
