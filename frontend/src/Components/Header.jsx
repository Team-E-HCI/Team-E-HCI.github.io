import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../actions/userActions'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Image, NavDropdown } from 'react-bootstrap'
import logo from '../Assets/Logo.png'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      <Navbar bg='light' expand='sm' collapseOnSelect>
        <LinkContainer to='/'>
          <Navbar.Brand>
            <Image src={logo} className='w-75' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {userInfo ? (
              <NavDropdown
                title={
                  <span className='text-blue font-weight-bold'>
                    {userInfo.nama}
                  </span>
                }
                id='basic-nav-dropdown'
                className='font-weight-bold'
              >
                <LinkContainer to='/profil'>
                  <NavDropdown.Item className='text-blue'>
                    Profil
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item className='text-blue' onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <LinkContainer to='/masuk'>
                  <Nav.Link className='text-blue font-weight-bold px-3'>
                    Masuk
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/daftar'>
                  <Nav.Link className='text-blue font-weight-bold px-3'>
                    Daftar
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
            <LinkContainer to='/tentang'>
              <Nav.Link className='text-blue font-weight-bold px-3'>
                Tentang
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/kontak-kami'>
              <Nav.Link className='text-blue font-weight-bold px-3'>
                Kontak Kami
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
