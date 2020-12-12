import '../App.css'
import Nav from './Nav'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaKey } from 'react-icons/fa'
import images from '../Assets/Login.png'
import { login } from '../actions/userActions'

const Login = ({ history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { error, userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <div className='container-fluid p-0'>
      <Nav text='text-blue' />
      <div className='row login'>
        <div className='row col-sm-11 m-5 content-login'>
          <div className='col-sm-5 offset-1 pt-5'>
            <h3 className='color-login mt-3'>Masuk</h3>
            {error && <h3>{error}</h3>}
            <br />
            <h6 className='login-text'>Email</h6>
            <InputGroup className='mb-3'>
              <FormControl
                type='email'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <InputGroup.Append>
                <InputGroup.Text id='basic-addon2'>
                  <BsFillPersonFill />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <br />
            <h6 className='login-text'>Password</h6>
            <InputGroup className='mb-3'>
              <FormControl
                type='password'
                aria-label="Recipient's username"
                aria-describedby='basic-addon2'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <InputGroup.Append>
                <InputGroup.Text id='basic-addon2'>
                  <FaKey />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
            <br />
            <button
              className='login-white p-2 pl-5 pr-5 mb-5'
              onClick={submitHandler}
            >
              Login
            </button>
            <a className='forgot-login ml-3' href='/'>
              Lupa Password?
            </a>
          </div>
          <div className='col-sm-5 m-2 ml-4 mt-3'>
            <img src={images} alt='' className='mx-auto' width='90%' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
