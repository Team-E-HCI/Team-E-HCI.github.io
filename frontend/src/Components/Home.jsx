import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import ilustration from '../Assets/Home.png'
import '../App.css'
import Header from './Header'

const Home = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const questionRedirect = userInfo ? '/ajukan-pertanyaan' : '/masuk'

  const timelineRedirect = userInfo ? '/linimasa' : '/masuk'

  return (
    <div className='container-fluid p-0'>
      <Header />
      <div className='row'>
        <div className='col-md-5 pl-5 mt-5'>
          <div className='container home-content'>
            <h1 className='m-2 text-blue home-title'>
              Lemparkan Pertanyaanmu.
            </h1>
            <p className='m-2 home-tagline'>
              Tanyakan apa pun. Malu tersesat, bertanya di forum.
            </p>
            <LinkContainer to={timelineRedirect}>
              <Button
                size='md'
                className='text-white font-weight-bold home-button m-2 border-0'
              >
                Linimasa
              </Button>
            </LinkContainer>
            <LinkContainer to={questionRedirect}>
              <Button
                size='md'
                className='text-white font-weight-bold home-button m-2 border-0'
              >
                Ajukan Pertanyaan
              </Button>
            </LinkContainer>
          </div>
        </div>
        <div className='col-md-7 p-5 mt-1'>
          <img
            src={ilustration}
            alt='Home-Ilustration'
            className='img-fluid img-content'
            width='80%'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
