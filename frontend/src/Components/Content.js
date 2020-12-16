import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Container, Button } from 'react-bootstrap'
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaBookmark,
  FaRegBookmark,
} from 'react-icons/fa'

const Content = ({ content }) => {
  const [likeActive, setLikeActive] = useState(false)
  const [numLike, setNumLike] = useState(666)
  const [bookmarkActive, setBookmarkActive] = useState(false)

  const likeHandler = () => {
    setLikeActive((prev) => !prev)
    setNumLike((prev) => (likeActive ? prev - 1 : prev + 1))
  }

  const bookmarkHandler = () => {
    setBookmarkActive((prev) => !prev)
  }

  return (
    <Container className='p-0' fluid>
      <Card className='px-2 py-4'>
        <Row>
          <Col xs={3} className='text-right my-auto'>
            <Link to='/' className='text-blue link-blue'>
              {content.pengguna.nama}
            </Link>
          </Col>
          <Col xs={7}>
            <Row>
              <Col>
                <Link to='/' className='text-blue link-blue'>
                  <h5>{content.judul}</h5>
                </Link>
              </Col>
            </Row>
            <Row className='pt-4'>
              <Col>
                <Button onClick={likeHandler} variant='link'>
                  <h5>
                    {likeActive ? (
                      <FaHeart className='text-danger' />
                    ) : (
                      <FaRegHeart className='text-dark' />
                    )}
                  </h5>
                </Button>
                <span>{numLike}</span>
              </Col>
              <Col>
                <Button variant='link' disabled>
                  <h5>
                    <FaComment className='text-dark' />
                  </h5>
                </Button>
                <span>666</span>
              </Col>
            </Row>
          </Col>
          <Col xs={2} className='text-center px-0'>
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
      </Card>
    </Container>
  )
}

export default Content
