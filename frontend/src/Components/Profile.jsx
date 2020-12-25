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
import { FaEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Sidebar from './Sidebar'
import Header from './Header'
import { getUserDetails } from '../actions/userActions'
import {
  listContentCategorized,
  deleteContent,
} from '../actions/contentActions'

const Profile = ({ history, match }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, user } = userDetails
  const userError = userDetails.error

  useEffect(() => {
    dispatch(getUserDetails(match.params.id))
  }, [match.params.id])

  const deleteHandler = (id) => {
    dispatch(deleteContent(id))
    history.go(0)
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
        <Link to='/notifikasi' className='text-blue link-blue px-3'>
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
            <Link to='/notifikasi' className='text-blue link-blue px-3'>
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
          <Col md={9} lg={10}>
            {account}
            {loading ? (
              <h5 className='pl-3'>Loading...</h5>
            ) : userError ? (
              <h5 className='pl-3'>{userError}</h5>
            ) : (
              user && (
                <div className='row ml-1 mr-1 mt-3'>
                  <div className='col-sm-4 my-auto mx-auto'>
                    <Image
                      src={userInfo.avatar}
                      className='mx-auto'
                      style={{ display: 'flex' }}
                      width='60%'
                      roundedCircle
                    />
                  </div>
                  <div className='col-sm-5'>
                    <div style={{ display: 'flex' }}>
                      <h1 className='profile-header mt-3'>Profil</h1>
                      {userInfo._id === match.params.id && (
                        <LinkContainer
                          className='mt-4 ml-auto edit-profile'
                          to={`/update-pengguna/${user._id}`}
                          style={{ cursor: 'pointer' }}
                        >
                          <FaEdit />
                        </LinkContainer>
                      )}
                    </div>
                    <Form.Group
                      as={Row}
                      className='profile-content'
                      controlId='formPlaintextName'
                    >
                      <Form.Label column className='col-sm-4'>
                        Nama Lengkap
                      </Form.Label>
                      <Col className='col-sm-6'>
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={user.name}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className='profile-content'
                      controlId='formPlaintextName'
                    >
                      <Form.Label column className='col-sm-4'>
                        Email
                      </Form.Label>
                      <Col className='col-sm-6'>
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={user.email}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className='profile-content'
                      controlId='formPlaintextName'
                    >
                      <Form.Label column className='col-sm-4'>
                        Github
                      </Form.Label>
                      <Col className='col-sm-6'>
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={user.github}
                        />
                      </Col>
                    </Form.Group>

                    <Form.Group
                      as={Row}
                      className='profile-content'
                      controlId='formPlaintextName'
                    >
                      <Form.Label column className='col-sm-4'>
                        Twitter
                      </Form.Label>
                      <Col className='col-sm-6'>
                        <Form.Control
                          plaintext
                          readOnly
                          defaultValue={user.twitter}
                        />
                      </Col>
                    </Form.Group>
                  </div>
                  <div className='col-sm-3'></div>
                  <div className='col-sm-12'>
                    <h1 className='profile-header mt-5'>Riwayat Pertanyaan</h1>
                    <ListGroup className='mt-5 mb-5'>
                      {user.konten &&
                        user.konten.map((k) => (
                          <div
                            className='question-profile'
                            style={{ display: 'flex' }}
                          >
                            <ListGroup.Item
                              variant='primary'
                              className='mt-2 w-100 mr-3'
                            >
                              <Link to={`/konten/${k._id}`}>{k.judul}</Link>
                            </ListGroup.Item>
                            {userInfo._id === match.params.id && (
                              <Button
                                variant='link'
                                className='mt-3 edit-profile'
                                onClick={() => deleteHandler(k._id)}
                              >
                                <RiDeleteBin6Line className='mb-1' />
                              </Button>
                            )}
                          </div>
                        ))}
                    </ListGroup>
                  </div>
                </div>
              )
            )}
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Profile
