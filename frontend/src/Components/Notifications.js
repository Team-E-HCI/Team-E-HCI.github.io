import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Container, Col, Row } from 'react-bootstrap'
import { getUserNotifications } from '../actions/userActions'
import { listContentCategorized } from '../actions/contentActions'
import Sidebar from './Sidebar'
import Header from './Header'

const Notifications = ({ history }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

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

  const userNotifications = useSelector((state) => state.userNotifications)
  const { notifications } = userNotifications

  useEffect(() => {
    dispatch(getUserNotifications())
  }, [])

  return (
    <Container fluid>
      <Row>
        {nav}
        <Col md={9} lg={10}>
          {account}
          <h4 className='text-blue'>Notifikasi</h4>
          {notifications.notifications &&
            notifications.notifications.map((n) => (
              <Card className='p-4 my-3'>
                <p className='text-blue font-weight-bold'>{n.pesan}</p>
              </Card>
            ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Notifications
