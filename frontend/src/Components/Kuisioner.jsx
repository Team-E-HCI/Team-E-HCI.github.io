import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../App.css'
import { Form, Button, Col, Row, Container } from 'react-bootstrap'
import { postQuestionaire } from '../actions/questionaireActions'
import { listContentCategorized } from '../actions/contentActions'
import Sidebar from './Sidebar'
import Header from './Header'

const Profile = ({ history, match }) => {
  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')
  const [question4, setQuestion4] = useState('')
  const [question5, setQuestion5] = useState('')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      postQuestionaire(question1, question2, question3, question4, question5)
    )
    history.go(0)
  }

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

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
          <Col md={9} lg={10}>
            {account}
            <div className='row ml-1 mr-1 mt-3'>
              <div className='col-sm-6 my-auto mx-auto'>
                <h1 className='text-center mt-2 mb-3 head-kuisioner'>
                  Kuisioner Infotech
                </h1>
                <Form onSubmit={submitHandler}>
                  <Form.Group className='w-100 border-kuisioner p-3'>
                    <Form.Label className='range-form'>
                      Dari skala 1-5, Berapa tingkat kepuasan Anda dalam
                      menggunakan website kami?
                    </Form.Label>
                    <br />
                    <div className='mt-2 mx-auto' style={{ display: 'flex' }}>
                      <Form.Check
                        style={{ display: 'inline-flex' }}
                        name='range-1'
                        className='mx-auto'
                        type='radio'
                        id='range-11'
                        value='1'
                        onChange={(e) => setQuestion1(e.target.value)}
                        label='1'
                      />
                      <Form.Check
                        style={{ display: 'inline-flex' }}
                        name='range-1'
                        className='mx-auto'
                        type='radio'
                        id='range-12'
                        value='2'
                        onChange={(e) => setQuestion1(e.target.value)}
                        label='2'
                      />
                      <Form.Check
                        style={{ display: 'inline-flex' }}
                        name='range-1'
                        className='mx-auto'
                        type='radio'
                        id='range-13'
                        value='3'
                        onChange={(e) => setQuestion1(e.target.value)}
                        label='3'
                      />
                      <Form.Check
                        style={{ display: 'inline-flex' }}
                        name='range-1'
                        className='mx-auto'
                        type='radio'
                        id='range-14'
                        value='4'
                        onChange={(e) => setQuestion1(e.target.value)}
                        label='4'
                      />
                      <Form.Check
                        style={{ display: 'inline-flex' }}
                        name='range-1'
                        className='mx-auto'
                        type='radio'
                        id='range-15'
                        value='5'
                        onChange={(e) => setQuestion1(e.target.value)}
                        label='5'
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className='w-100 border-kuisioner p-3'>
                    <Form.Label className='range-form'>
                      Dari skala 1-5, Berapa tingkat kenyamanan Anda dalam
                      menggunakan website kami?
                    </Form.Label>
                    <br />
                    <div className='mt-2 mx-auto' style={{ display: 'flex' }}>
                      <Form.Check
                        style={{ display: 'inline-flex' }}
                        name='range-2'
                        className='mx-auto'
                        type='radio'
                        value='1'
                        onChange={(e) => setQuestion2(e.target.value)}
                        id='range-21'
                        label='1'
                      />
                      <Form.Check
                        style={{ display: 'inline-flex' }}
                        name='range-2'
                        className='mx-auto'
                        type='radio'
                        value='2'
                        onChange={(e) => setQuestion2(e.target.value)}
                        id='range-22'
                        label='2'
                      />
                      <Form.Check
                        style={{ display: 'inline-flex' }}
                        name='range-2'
                        className='mx-auto'
                        type='radio'
                        value='3'
                        onChange={(e) => setQuestion2(e.target.value)}
                        id='range-23'
                        label='3'
                      />
                      <Form.Check
                        style={{ display: 'inline-flex' }}
                        name='range-2'
                        className='mx-auto'
                        type='radio'
                        value='4'
                        onChange={(e) => setQuestion2(e.target.value)}
                        id='range-24'
                        label='4'
                      />
                      <Form.Check
                        style={{ display: 'inline-flex' }}
                        name='range-2'
                        className='mx-auto'
                        type='radio'
                        value='5'
                        onChange={(e) => setQuestion2(e.target.value)}
                        id='range-25'
                        label='5'
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className='w-100 border-kuisioner p-3'>
                    <Form.Label className='range-form'>
                      Apakah semua fitur, menu, dan desain pada situs kami mudah
                      untuk dipahami?
                    </Form.Label>
                    <br />
                    <div className='mt-2 ml-3'>
                      <Form.Check
                        name='range-3'
                        className='mt-2'
                        type='radio'
                        id='range-31'
                        value='Sangat Sulit Dipahami'
                        onChange={(e) => setQuestion3(e.target.value)}
                        label='Sangat Sulit Dipahami'
                      />
                      <Form.Check
                        name='range-3'
                        className='mt-2'
                        type='radio'
                        id='range-32'
                        value='Sulit Dipahami'
                        onChange={(e) => setQuestion3(e.target.value)}
                        label='Sulit Dipahami'
                      />
                      <Form.Check
                        name='range-3'
                        className='mt-2'
                        type='radio'
                        id='range-33'
                        value='Cukup Mudah Dipahami'
                        onChange={(e) => setQuestion3(e.target.value)}
                        label='Cukup Mudah Dipahami'
                      />
                      <Form.Check
                        name='range-3'
                        className='mt-2'
                        type='radio'
                        id='range-34'
                        value='Mudah Dipahami'
                        onChange={(e) => setQuestion3(e.target.value)}
                        label='Mudah Dipahami'
                      />
                      <Form.Check
                        name='range-3'
                        className='mt-2'
                        type='radio'
                        id='range-35'
                        value='Sangat Mudah'
                        onChange={(e) => setQuestion3(e.target.value)}
                        label='Sangat Mudah'
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className='w-100 border-kuisioner p-3'>
                    <Form.Label className='range-form'>
                      Apakah website kami sudah memenuhi kebutuhan Anda?
                    </Form.Label>
                    <br />
                    <div className='mt-2 ml-3'>
                      <Form.Check
                        name='range-4'
                        className='mt-2'
                        type='radio'
                        id='range-41'
                        value='Tidak Memenuhi'
                        onChange={(e) => setQuestion4(e.target.value)}
                        label='Tidak Memenuhi'
                      />
                      <Form.Check
                        name='range-4'
                        className='mt-2'
                        type='radio'
                        id='range-42'
                        value='Memenuhi'
                        onChange={(e) => setQuestion4(e.target.value)}
                        label='Memenuhi'
                      />
                      <Form.Check
                        name='range-4'
                        className='mt-2'
                        type='radio'
                        id='range-43'
                        value='Sangat Memenuhi'
                        onChange={(e) => setQuestion4(e.target.value)}
                        label='Sangat Memenuhi'
                      />
                    </div>
                  </Form.Group>
                  <Form.Group className='w-100 border-kuisioner p-3'>
                    <Form.Label className='range-form'>
                      Demi meningkatkan kepuasan pengguna, tolong berikan saran
                      dan kritik terhadap website kami.
                    </Form.Label>
                    <Form.Control
                      as='textarea'
                      onChange={(e) => setQuestion5(e.target.value)}
                      rows={3}
                    />
                  </Form.Group>
                  <Button
                    type='submit'
                    className='mx-auto btn-kuisioner p-2 px-5 mb-3'
                    style={{ display: 'flex' }}
                  >
                    Kirim
                  </Button>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Profile
