import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Col, Row, Container, Form, Button, Image, Card } from 'react-bootstrap'
import {
  listContentCategorized,
  detailContent,
  addComment,
} from '../actions/contentActions'
import { FaBookmark, FaRegBookmark } from 'react-icons/fa'
import Sidebar from './Sidebar'
import Header from './Header'

const PostDetail = ({ history, match }) => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  const contentDetail = useSelector((state) => state.contentDetail)
  const { content } = contentDetail
  const { pengguna } = content

  useEffect(() => {
    dispatch(detailContent(match.params.id))
  }, [])

  const [komen, setKomen] = useState('')

  const commentHandler = () => {
    dispatch(addComment(match.params.id, komen))
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

  const [bookmarkActive, setBookmarkActive] = useState(false)

  const bookmarkHandler = () => {
    setBookmarkActive((prev) => !prev)
  }

  return (
    <Container fluid>
      <Row>
        {nav}
        <Col md={9} lg={10}>
          {account}
          {content && pengguna && (
            <Container className='mt-4' fluid>
              <Row className='py-2'>
                <Col xs={3}>
                  <Row>
                    <Col>
                      <Image src={pengguna.avatar} className='w-25' fluid />
                      <span>
                        <Link
                          to={`/pengguna/${pengguna._id}`}
                          className='text-blue link-blue font-weight-bold pl-3'
                        >
                          {pengguna.nama}
                        </Link>
                      </span>
                    </Col>
                  </Row>
                </Col>
                <Col xs={7} className='text=left'>
                  <h4 className='text-blue'>{content.judul}</h4>
                </Col>
                <Col xs={2}>
                  <Button onClick={bookmarkHandler} variant='link'>
                    <h5>
                      {bookmarkActive ? (
                        <FaBookmark className='text-dark' />
                      ) : (
                        <FaRegBookmark className='text-dark' />
                      )}
                    </h5>
                  </Button>
                </Col>
              </Row>
              <Row className='py-2'>
                <Col>
                  <p className='text-justify font-weight-bold'>
                    {content.postingan}
                  </p>
                  {content.gambar &&
                    content.gambar.map((g) => (
                      <a href={g} target='_blank'>
                        <Image
                          style={{ height: '10rem', margin: '1rem' }}
                          src={g}
                          fluid
                        />
                      </a>
                    ))}
                </Col>
              </Row>
              <Form onSubmit={commentHandler} className='py-2'>
                <Row>
                  <Col xs={10}>
                    <Form.Control
                      controlId='komen'
                      value={komen}
                      onChange={(e) => setKomen(e.target.value)}
                      placeholder='Berikan Jawaban Anda'
                    />
                  </Col>
                  <Col xs={2}>
                    <Button
                      type='submit'
                      className='text-white font-weight-bold border-0 comment-button'
                    >
                      Kirim
                    </Button>
                  </Col>
                </Row>
              </Form>
              <h4 className='mt-4'>{content.komentar.length} Jawaban:</h4>
              {content.komentar.map((comment) => (
                <Card className='p-3 my-3'>
                  <Row className='mb-3'>
                    <Col>
                      <Image src={comment.avatar} style={{ width: 30 }} />
                      <span>
                        <Link
                          to={`/pengguna/${comment.pengguna}`}
                          className='text-blue link-blue font-weight-bold pl-3'
                        >
                          {comment.nama}
                        </Link>
                      </span>
                    </Col>
                  </Row>
                  <p className='text-justify font-weight-bold'>
                    {comment.komen}
                  </p>
                </Card>
              ))}
            </Container>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default PostDetail
