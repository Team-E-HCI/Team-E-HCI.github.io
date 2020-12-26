import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'
import { Form, Col, Row, Image, Container, Button } from 'react-bootstrap'
import Sidebar from './Sidebar'
import Header from './Header'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { listContentCategorized } from '../actions/contentActions'

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
  }, [userInfo, match])

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, user, error } = userDetails

  useEffect(() => {
    dispatch(getUserDetails(match.params.id))
  }, [match, userInfo, dispatch])

  const [nama, setNama] = useState(userInfo.nama)
  const [email, setEmail] = useState(userInfo.email)
  const [github, setGithub] = useState(userInfo.github)
  const [twitter, setTwitter] = useState(userInfo.twitter)

  const updateHandler = async () => {
    await dispatch(updateUserProfile(nama, email, github, twitter))
    history.push(`/pengguna/${userInfo._id}`)
  }

  const categoryHandler = useCallback(
    (category) => {
      dispatch(listContentCategorized(category))
      history.push('/linimasa')
    },
    [dispatch, history]
  )

  const logoutHandler = useCallback(() => {
    history.push('/')
  }, [history])

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

    mql.addEventListener('change', mediaQueryChanged)
  }, [mql, categoryHandler, logoutHandler, userInfo])

  return (
    <>
      <div className='container-fluid p-0'>
        <Row>
          {nav}
          <Col>
            {account}
            {message ? (
              <h1>{message}</h1>
            ) : loading ? (
              <h5 className='pl-3'>Loading...</h5>
            ) : error ? (
              <h5 className='pl-3'>{error}</h5>
            ) : (
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
                        controlId='namaLengkap'
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
                        controlId='email'
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
                        controlId='github'
                      >
                        <Form.Label column className='col-sm-3 form-edit'>
                          Github
                        </Form.Label>
                        <Col className='col-sm-6'>
                          <Form.Control
                            plaintext
                            defaultValue={user.github}
                            onChange={(e) => setGithub(e.target.value)}
                            className='form-border'
                          />
                        </Col>
                      </Form.Group>

                      <Form.Group
                        as={Row}
                        className='profile-content mx-1'
                        controlId='twitter'
                      >
                        <Form.Label column className='col-sm-3 form-edit'>
                          Twitter
                        </Form.Label>
                        <Col className='col-sm-6'>
                          <Form.Control
                            plaintext
                            defaultValue={user.twitter}
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
