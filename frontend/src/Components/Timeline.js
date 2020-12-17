import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { listContent, listContentCategorized } from '../actions/contentActions'
import Content from './Content'
import Header from './Header'
import Sidebar from './Sidebar'

const Timeline = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    }
  }, [userInfo])

  const dispatch = useDispatch()

  const contentList = useSelector((state) => state.contentList)
  const { contents } = contentList

  useEffect(() => {
    dispatch(listContent())
  }, [])

  const contentCategory = useSelector((state) => state.contentCategory)

  const categoryHandler = (category) => {
    dispatch(listContentCategorized(category))
    history.push('/linimasa')
  }

  const [nav, setNav] = useState(
    <Col md={3} lg={2} className='p-0'>
      <Sidebar onCategory={categoryHandler} />
    </Col>
  )
  const [account, setAccount] = useState(
    <Row className='px-5'>
      <Col className='font-weight-bold pt-4 pr-5 text-right'>
        <Link to='/profil' className='text-blue link-blue px-3'>
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
          <Sidebar onCategory={categoryHandler} />
        </Col>
      )
    })
    setAccount(() =>
      mql.matches ? null : (
        <Row className='px-5'>
          <Col className='font-weight-bold pt-4 text-right'>
            <Link to='/profil' className='text-blue link-blue px-3'>
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
    <Container fluid>
      <Row>
        {nav}
        <Col md={9} lg={10}>
          {account}
          <Row className='p-4'>
            <Col>
              <h3 className='text-blue'>Linimasa</h3>
            </Col>
            <Col className='text-right'>
              <LinkContainer to='/ajukan-pertanyaan'>
                <Button
                  size='md'
                  className='text-white font-weight-bold home-button m-2 border-0'
                >
                  Ajukan Pertanyaan
                </Button>
              </LinkContainer>
            </Col>
          </Row>
          <Row>
            <Col md={9} className='p-0'>
              {contentCategory.contents.length === 0
                ? contents.map((content) => <Content content={content} />)
                : contentCategory.contents.map((content) => (
                    <Content content={content} />
                  ))}
            </Col>
            <Col md={3} className='p-0 mobile-none'>
              <Card className='p-3'>
                <h5 className='text-blue'>AAN Pernah bilang:</h5>
                <h5 className='pt-4'>H3H3</h5>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Timeline
