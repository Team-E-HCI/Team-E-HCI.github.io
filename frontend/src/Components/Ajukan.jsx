import '../App.css'
import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  Form,
  Button,
  FormControl,
  InputGroup,
  Dropdown,
  Col,
  Row,
  Container,
  Image,
} from 'react-bootstrap'
import ajukan from '../Assets/Pertanyaan.png'
import Sidebar from './Sidebar'
import Header from './Header'
import { postContent, listContentCategorized } from '../actions/contentActions'

const Ajukan = ({ history, match }) => {
  const [category, setCategory] = useState('')
  const [images, setImages] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSelect = (e) => {
    console.log(e)
    setCategory(e)
  }

  const handleChange = async (e) => {
    setLoading(true)

    const formData = new FormData()
    Object.values(e.target.files).forEach((file) => {
      formData.append('gambar', file)
    })

    await axios
      .post('/api/konten/upload', formData)
      .then((res) => {
        console.log(res.data)
        return setImages(res.data)
      })
      .catch((err) => console.log(err))

    setLoading(false)
  }

  const dispatch = useDispatch()

  const submitHandler = () => {
    dispatch(postContent(title, body, category, images))
    history.push('/linimasa')
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
            <div className='row'>
              <div className='col-md-6 offset-1'>
                <h1 className='mt-3 ajukan-content'>Ajukan Pertanyaan</h1>
                <p className='mt-4 text-ajukan'>Judul</p>
                <InputGroup className='mb-3'>
                  <FormControl
                    aria-label='Username'
                    aria-describedby='basic-addon1'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </InputGroup>
                <p className='mt-3 text-ajukan'>Kategori</p>
                <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle className='dpdn-ajukan'>
                    {category}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey='Gadget Error'>
                      Gadget Error
                    </Dropdown.Item>
                    <Dropdown.Item eventKey='Coding'>Coding</Dropdown.Item>
                    <Dropdown.Item eventKey='Teknologi'>
                      Teknologi
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <p className='mt-3 text-ajukan'>Konten</p>
                <Form>
                  <Form.Group>
                    <Form.Control
                      as='textarea'
                      row={3}
                      onChange={(e) => setBody(e.target.value)}
                      value={body}
                    />
                  </Form.Group>
                  <p className='mt-3 text-ajukan'>Upload Gambar</p>
                  <Form.Group>
                    <Form.File
                      id='exampleFormControlFile1'
                      onChange={handleChange}
                      multiple
                    />
                    {loading ? (
                      <h5>Loading....</h5>
                    ) : (
                      images &&
                      images.map((image) => (
                        <Image
                          className='m-1'
                          src={image}
                          style={{ height: '10rem', margin: '1rem' }}
                          fluid
                        />
                      ))
                    )}
                  </Form.Group>
                </Form>
                <Button
                  size='md'
                  className='p-2 pl-5 pr-5 mt-1 input-ajukan'
                  onClick={submitHandler}
                >
                  Ajukan
                </Button>
              </div>
              <div className='col-md-4 ml-5 my-auto mobile-none'>
                <img
                  src={ajukan}
                  alt='Home-Ilustration'
                  className='img-fluid img-content mx-auto'
                  style={{ display: 'flex' }}
                  width='60%'
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Ajukan
