import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { register } from '../actions/userActions'
import '../App.css'
import Nav from './Nav'
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaKey } from 'react-icons/fa'
import images from '../Assets/Login.png'

const Login = ({ history }) => {
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userRegister = useSelector((state) => state.userRegister)
  const { error, userInfo } = userRegister

  const dispatch = useDispatch()

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(nama, email, password))
  }

  return (
    <div className='container-fluid p-0'>
      <Nav text='text-blue' />
      <h1 className='ml-3 mt-3 pl-5 pt-3 daftar-text'>Daftar</h1>
      {error && <h3>{error}</h3>}
      <div className='row ml-5 mr-5'>
        <div className='col-sm-6'>
          <br />
          <h6 className='login-text'>Nama Lengkap</h6>
          <FormControl
            type='text'
            aria-label='Username'
            aria-describedby='basic-addon1'
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <br />
          <h6 className='login-text'>Email</h6>
          <FormControl
            type='email'
            aria-label='Username'
            aria-describedby='basic-addon1'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <h6 className='login-text'>Password</h6>
          <FormControl
            type='password'
            aria-label='Username'
            aria-describedby='basic-addon1'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className='login-blue p-2 pl-5 pr-5 mt-2'
            onClick={submitHandler}
          >
            Daftar
          </button>
          <br />
        </div>
        <div className='col-sm-6 p-5 pl-5 pr-5 signup-text align-text-center'>
          <h1 className='font-weight-bold text mt-5'>
            Tak Kenal Maka Berkenalan.
          </h1>
          <h5 className='text mb-5'>
            Buat akun sebelum mengajukan pertanyaan, agar orang lain tahu
            bagaimana cara memanggil Anda ketika berdiskusi.
          </h5>
        </div>
      </div>
    </div>
  )
}

export default Login
