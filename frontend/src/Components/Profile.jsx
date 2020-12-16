import "../App.css";
import profile from '../Assets/hanif.jpeg'
import { Form, Col, Row, ListGroup, Image } from "react-bootstrap";
import {FaEdit} from 'react-icons/fa'
import {RiDeleteBin6Line} from 'react-icons/ri'

const Profile = () => {
  return (
    <>
    <div className='container-fluid p-0'>
      <div className='row ml-1 mr-1 mt-3'>
          <div className="col-sm-4 my-auto mx-auto">
            <Image src={profile} className="mx-auto" style={{display: "flex"}} width="60%" roundedCircle/>
          </div>
          <div className="col-sm-5">
            <div style={{display:"flex"}}>
              <h1 className="profile-header mt-3">Profil</h1>
              <a className="mt-4 ml-auto edit-profile" href="/edit-profile"><FaEdit/></a>
            </div>
            <Form.Group as={Row} className="profile-content" controlId="formPlaintextName">
            <Form.Label column className="col-sm-4">
              Nama Lengkap
            </Form.Label>
            <Col className="col-sm-6">
            <Form.Control plaintext readOnly defaultValue="mamankhehe" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="profile-content" controlId="formPlaintextName">
            <Form.Label column className="col-sm-4">
              Email
            </Form.Label>
            <Col className="col-sm-6">
            <Form.Control plaintext readOnly defaultValue="mamankhehe@gmail.com" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="profile-content" controlId="formPlaintextName">
            <Form.Label column className="col-sm-4">
              Github
            </Form.Label>
            <Col className="col-sm-6">
            <Form.Control plaintext readOnly defaultValue="mamankjaprut" />
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="profile-content" controlId="formPlaintextName">
            <Form.Label column className="col-sm-4">
              Twitter
            </Form.Label>
            <Col className="col-sm-6">
            <Form.Control plaintext readOnly defaultValue="mamankdarno"/>
            </Col>
            </Form.Group>
          </div>
          <div className="col-sm-3"></div>
          <div className="col-sm-12">
            <h1 className="profile-header mt-5">Riwayat Pertanyaan</h1>
            <ListGroup className="mt-5 mb-5">
              <div className="question-profile" style={{display: "flex"}}>
                <ListGroup.Item variant="primary" className="mt-2 w-100 mr-3">AAN AYAM</ListGroup.Item>
                <a className="mt-3 edit-profile" href="#"><RiDeleteBin6Line/></a>
              </div>
              
              <div className="question-profile" style={{display: "flex"}}>
                <ListGroup.Item variant="primary" className="mt-2 w-100 mr-3">LOPE NIA</ListGroup.Item>
                <a className="mt-3 edit-profile" href="#"><RiDeleteBin6Line/></a>
              </div>

              <div className="question-profile" style={{display: "flex"}}>
                <ListGroup.Item variant="primary" className="mt-2 w-100 mr-3">CELALU CAYANK</ListGroup.Item>
                <a className="mt-3 edit-profile" href="#"><RiDeleteBin6Line/></a>
              </div>

              <div className="question-profile" style={{display: "flex"}}>
                <ListGroup.Item variant="primary" className="mt-2 w-100 mr-3">POLEPEL</ListGroup.Item>
                <a className="mt-3 edit-profile" href="#"><RiDeleteBin6Line/></a>
              </div>

              <div className="question-profile" style={{display: "flex"}}>
                <ListGroup.Item variant="primary" className="mt-2 w-100 mr-3">CAMPE MATI</ListGroup.Item>
                <a className="mt-3 edit-profile" href="#"><RiDeleteBin6Line/></a>
              </div>
            </ListGroup>
          </div>
        </div>
    </div>
    </>
  );
};

export default Profile;