import "../App.css";
import profile from '../Assets/hanif.jpeg'
import { Form, Col, Row, ListGroup, Image, Button } from "react-bootstrap";
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'

const EditProfile = () => {
  return (
    <>
    <div className='container-fluid p-0'>
      <h1 className="text-center mt-5 text-blue font-weight-bold">Edit Profil</h1>
      <div className='row mt-5'>
          <div className="col-sm-4 my-auto mx-auto">
            <Image src={profile} className="mx-auto" style={{display: "flex"}} width="60%" roundedCircle/>
          </div>
          <div className="col-sm-8 mt-3">
            <Form.Group as={Row} className="profile-content mt-3 mx-1" controlId="formPlaintextName">
            <Form.Label column className="col-sm-3 form-edit">
              Nama Lengkap
            </Form.Label>
            <Col className="col-sm-6">
            <Form.Control plaintext defaultValue="mamankhehe" className="form-border"/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="profile-content mx-1" controlId="formPlaintextName">
            <Form.Label column className="col-sm-3 form-edit">
              Email
            </Form.Label>
            <Col className="col-sm-6">
            <Form.Control plaintext defaultValue="mamankhehe@gmail.com" className="form-border"/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="profile-content mx-1" controlId="formPlaintextName">
            <Form.Label column className="col-sm-3 form-edit">
              Github
            </Form.Label>
            <Col className="col-sm-6">
            <Form.Control plaintext defaultValue="mamankjaprut" className="form-border"/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="profile-content mx-1" controlId="formPlaintextName">
            <Form.Label column className="col-sm-3 form-edit">
              Twitter
            </Form.Label>
            <Col className="col-sm-6">
            <Form.Control plaintext defaultValue="mamankdarno" className="form-border"/>
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="profile-content mx-1" controlId="formPlaintextName">
            <Col className="col-sm-6 offset-3">
            <Button>Konfirmasi Profil Baru</Button>
            </Col>
            </Form.Group>
            
          </div>
        </div>
    </div>
    </>
  );
};

export default EditProfile;