import "../App.css";
import { Nav, NavLink, NavItem, Button, FormControl, InputGroup, Dropdown } from "react-bootstrap";
import ajukan from "../Assets/Pertanyaan.png";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState } from "react";

const Ajukan = ({title, items, multiSelect = false}) => {
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }

  return (
    <>
    <div className='container-fluid p-0'>
      <div className='row'>
          <div className='col-sm-6 offset-1'>
            <h1 className='mt-5 ajukan-content'>
              Ajukan Pertanyaan
            </h1>
            <p className='mt-4 text-ajukan'>Judul</p>
            <InputGroup className="mb-3">
              <FormControl aria-label="Username" aria-describedby="basic-addon1"/>
            </InputGroup>
            <p className='mt-3 text-ajukan'>Kategori</p>
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle className="dpdn-ajukan" >
                {value}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item eventKey="Gadget Error">Gadget Error</Dropdown.Item>
                <Dropdown.Item eventKey="Coding">Coding</Dropdown.Item>
                <Dropdown.Item eventKey="Teknologi">Teknologi</Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>
            <p className='mt-3 text-ajukan'>Konten</p>
            <InputGroup>
              <CKEditor editor={ClassicEditor} style={{height: '200px'}} onInit={editor =>{}}/>
            </InputGroup>
            <Button size='md'className='p-2 pl-5 pr-5 mt-4 btn-ajukan'>Ajukan</Button>
          </div>
        <div className='col-md-4 p-5 ml-4'>
          <img src={ajukan} alt='Home-Ilustration' className='img-fluid img-content' width='75%'/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ajukan;