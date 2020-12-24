import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Row,
  Col,
  Card,
  Container,
  Button,
  Badge,
  Image,
} from 'react-bootstrap'
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaBookmark,
  FaRegBookmark,
} from 'react-icons/fa'

const Content = ({ content }) => {
  const [bookmarkActive, setBookmarkActive] = useState(false)

  const bookmarkHandler = () => {
    setBookmarkActive((prev) => !prev)
  }

  return (
    <Container className='p-0' fluid>
      <Card className='px-2 py-4'>
        <Row>
          <Col xs={3} className='text-right my-auto'>
            <Row>
              <Col className='py-1 px-0 text-center'>
                <Image
                  src={content.pengguna.avatar}
                  className='w-25 mb-2'
                  fluid
                />
                <span>
                  <Link
                    to={`/pengguna/${content.pengguna._id}`}
                    className='text-blue link-blue font-weight-bold'
                  >
                    <p>{content.pengguna.nama}</p>
                  </Link>
                </span>
              </Col>
            </Row>
          </Col>
          <Col xs={7}>
            <Row>
              <Col>
                <Link
                  to={`/konten/${content._id}`}
                  className='text-blue link-blue'
                >
                  <h5>{content.judul}</h5>
                </Link>
                <Badge variant='info' className='p-1'>
                  {content.kategori}
                </Badge>
              </Col>
            </Row>
            <Row className='pt-4'>
              <Col>
                <Button variant='link' disabled>
                  <h5>
                    <FaComment className='text-dark' />
                  </h5>
                </Button>
                <span>{content.komentar.length}</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default Content
