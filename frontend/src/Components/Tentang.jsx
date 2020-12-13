import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ilustration from '../Assets/tentang.png'

const Tentang = () => {
  return (
    <div className='container-fluid p-0'>
      <Row>
        <Col md className='pl-5 mt-5'>
          <div className='container p-4 mt-4'>
            <h1 className='m-2 mb-4 text-blue home-title'>Tentang</h1>
            <p className='m-2 home-tagline text-justify'>
              Infotech adalah tempat bertanya segala sesuatu seputar dunia
              teknologi, seperti solusi dari perangkat gawai yang rusak,
              spesifikasi terbaik untuk sebuah gawai, solusi algoritma program
              yang mengalami eror, tugas sekolah maupun kampus, atau sekedar
              berdiskusi ringan seperti masa depan teknologi.
            </p>
          </div>
        </Col>
        <Col md className='p-5'>
          <img
            src={ilustration}
            alt='Ilustration'
            className='img-fluid ml-4'
            width='80%'
          />
        </Col>
      </Row>
    </div>
  )
}

export default Tentang
