import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'
import {
  Form,
  Col,
  Row,
  ListGroup,
  Image,
  Container,
  Button,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Sidebar from './Sidebar'
import Header from './Header'
import {
  getUserDetails,
  updateUserProfile,
  login,
} from '../actions/userActions'
import { listContentCategorized } from '../actions/contentActions'
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'

const EditProfile = ({ history, match }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  const [message, setMessage] = useState('')

  useEffect(() => {
    if (userInfo._id !== match.params.id) {
      setMessage('Unauthorized Access')
    }
  }, [])

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, user } = userDetails

  useEffect(() => {
    dispatch(getUserDetails(match.params.id))
  }, [])

  const [nama, setNama] = useState(userInfo.nama)
  const [email, setEmail] = useState(userInfo.email)
  const [github, setGithub] = useState(userInfo.github)
  const [twitter, setTwitter] = useState(userInfo.twitter)

  const updateHandler = () => {
    dispatch(updateUserProfile(nama, email, github, twitter))
    history.push('/')
  }

  const categoryHandler = (category) => {
    dispatch(listContentCategorized(category))
    history.push('/linimasa')
  }

  const logoutHandler = () => {
    history.push('/')
  }

  const [nav, setNav] = useState(
    <Col md={3} lg={2} className='p-0'>
      <Sidebar onLogout={logoutHandler} onCategory={categoryHandler} />
    </Col>
  )

  const [account, setAccount] = useState(
    <Row className='px-5'>
      <Col className='font-weight-bold pt-4 pr-5 text-right'>
        <Link
          to={`/pengguna/${userInfo._id}`}
          className='text-blue link-blue px-3'
        >
          {userInfo && userInfo.nama}
        </Link>
        <Link to='/profil' className='text-blue link-blue px-3'>
          Notifikasi
        </Link>
      </Col>
    </Row>
  )
  const mql = window.matchMedia('(max-width: 768px)')

  useEffect(() => {
    mql.addEventListener('change', mediaQueryChanged)
  }, [mql.matches])

  const mediaQueryChanged = () => {
    setNav(() => {
      return mql.matches ? (
        <Container className='p-0' fluid>
          <Header />
        </Container>
      ) : (
        <Col md={3} lg={2} className='p-0'>
          <Sidebar onLogout={logoutHandler} onCategory={categoryHandler} />
        </Col>
      )
    })
    setAccount(() =>
      mql.matches ? null : (
        <Row className='px-5'>
          <Col className='font-weight-bold pt-4 text-right'>
            <Link
              to={`/pengguna/${userInfo._id}`}
              className='text-blue link-blue px-3'
            >
              {userInfo && userInfo.nama}
            </Link>
            <Link to='/profil' className='text-blue link-blue px-3'>
              Notifikasi
            </Link>
          </Col>
        </Row>
      )
    )
  }

  return (
    <>
      <div className='container-fluid p-0'>
        <Row>
          {nav}
          <Col>
            {account}

            {message ? (
              <h1>{message}</h1>
            ) : (
              !loading &&
              user && (
                <>
                  <h1 className='text-center mt-5 text-blue font-weight-bold'>
                    Edit Profil
                  </h1>
                  <div className='row mt-5'>
                    <div className='col-sm-4 my-auto mx-auto'>
                      <Image
                        src={user.avatar}
                        className='mx-auto'
                        style={{ display: 'flex' }}
                        width='60%'
                        roundedCircle
                      />
                    </div>
                    <div className='col-sm-8 mt-3'>
                      <Form.Group
                        as={Row}
                        className='profile-content mt-3 mx-1'
                        controlId='formPlaintextName'
                      >
                        <Form.Label column className='col-sm-3 form-edit'>
                          Nama Lengkap
                        </Form.Label>
                        <Col className='col-sm-6'>
                          <Form.Control
                            plaintext
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            className='form-border'
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        className='profile-content mx-1'
                        controlId='formPlaintextName'
                      >
                        <Form.Label column className='col-sm-3 form-edit'>
                          Email
                        </Form.Label>
                        <Col className='col-sm-6'>
                          <Form.Control
                            plaintext
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='form-border'
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        className='profile-content mx-1'
                        controlId='formPlaintextName'
                      >
                        <Form.Label column className='col-sm-3 form-edit'>
                          Github
                        </Form.Label>
                        <Col className='col-sm-6'>
                          <Form.Control
                            plaintext
                            defaultValue={github}
                            onChange={(e) => setGithub(e.target.value)}
                            className='form-border'
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        className='profile-content mx-1'
                        controlId='formPlaintextName'
                      >
                        <Form.Label column className='col-sm-3 form-edit'>
                          Twitter
                        </Form.Label>
                        <Col className='col-sm-6'>
                          <Form.Control
                            plaintext
                            defaultValue={twitter}
                            onChange={(e) => setTwitter(e.target.value)}
                            className='form-border'
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        className='profile-content mx-1'
                        controlId='formPlaintextName'
                      >
                        <Col className='col-sm-6 offset-3'>
                          <Button onClick={updateHandler}>
                            Konfirmasi Profil Baru
                          </Button>
                        </Col>
                      </Form.Group>
                    </div>
                  </div>
                </>
              )
            )}
          </Col>
        </Row>
      </div>
    </>
  )
}

export default EditProfile
