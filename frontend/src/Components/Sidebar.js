import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  ListGroup,
  Card,
  Container,
  Image,
  Accordion,
  Button,
} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import logo from '../Assets/Logo.png'

const Sidebar = ({ onCategory, onLogout }) => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    onLogout()
  }

  return (
    <Container className='p-0' fluid>
      <Card className='p-4'>
        <LinkContainer style={{ cursor: 'pointer' }} to='/'>
          <Image src={logo} fluid />
        </LinkContainer>
        <ListGroup className='mt-5' variant='flush'>
          <ListGroup.Item>
            <Link
              to='/linimasa'
              className='text-blue link-blue font-weight-bold'
            >
              <p>Linimasa</p>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Accordion>
              <Accordion.Toggle
                as={Button}
                variant='link'
                className='text-blue link-blue p-0 font-weight-bold toggle-link'
                eventKey='0'
              >
                <p>Kategori</p>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='0'>
                <ul className='list-unstyled pl-4'>
                  <li className='py-2'>
                    <Link
                      onClick={() => onCategory('gadget-error')}
                      className='text-dark '
                    >
                      Gadget Error
                    </Link>
                  </li>
                  <li className='py-2'>
                    <Link
                      onClick={() => onCategory('coding')}
                      className='text-dark '
                    >
                      Coding
                    </Link>
                  </li>
                  <li className='py-2'>
                    <Link
                      onClick={() => onCategory('teknologi')}
                      className='text-dark '
                    >
                      Teknologi
                    </Link>
                  </li>
                </ul>
              </Accordion.Collapse>
            </Accordion>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link
              to='/tentang'
              className='text-blue link-blue font-weight-bold'
            >
              <p>Tentang</p>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link
              to='/kontak-kami'
              className='text-blue link-blue font-weight-bold'
            >
              <p>Kontak Kami</p>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link
              to='/kuesioner'
              className='text-blue link-blue font-weight-bold'
            >
              <p>Kuesioner</p>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link to='/faq' className='text-blue link-blue font-weight-bold'>
              <p>FAQ</p>
            </Link>
          </ListGroup.Item>
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            className='text-blue link-blue font-weight-bold'
            onClick={logoutHandler}
          >
            <p>Logout</p>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  )
}

export default Sidebar
