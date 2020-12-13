import React from 'react'
import ilustration from '../Assets/kontak.png'
import { SiGmail } from 'react-icons/si'

const KontakKami = () => {
  return (
    <div className='container-fluid p-0'>
      <div className='row'>
        <div className='col-md pl-5 mt-5'>
          <div className='container pt-5'>
            <h1 className='m-2 mb-4 text-blue home-title'>Kontak Kami</h1>
            <p className='m-2 home-tagline text-justify'>
              Bila ada pertanyaan mengenai fitur, atau mengalami eror pada fitur
              atau akun, atau ada saran untuk meningkatkan kenyamanan pengguna.
              Anda dapat menghubungi kami melalui:
            </p>
            <p className='m-2 mt-4 home-tagline font-weight-bold'>
              <SiGmail className='mr-2 text-danger' />
              timehci5@gmail.com
            </p>
          </div>
        </div>
        <div className='col-md p-5 mt-2 ml-3'>
          <img
            src={ilustration}
            alt='Ilustration'
            className='img-fluid m-2 ml-5'
            width='65%'
          />
        </div>
      </div>
    </div>
  )
}

export default KontakKami
