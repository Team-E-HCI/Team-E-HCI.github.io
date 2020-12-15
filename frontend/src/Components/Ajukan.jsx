import "../App.css";
import React from 'react'
import {Form, Button, FormControl, InputGroup, Dropdown } from "react-bootstrap";
import ajukan from "../Assets/Pertanyaan.png";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useState } from "react";
import {FiUpload} from 'react-icons/fi'

const Ajukan = ({onEditorStateChange, defaultValue},props) => {
  const [value,setValue]=useState('');

  const onChange = (event, editor ) => {
      const data = editor.getData();
      console.log(  data  );
      onEditorStateChange(data)
    };

  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }

  const hiddenFileInput = React.useRef(null);
  
  const handleClick = event => {
    hiddenFileInput.current.click();
  };  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  
  return (
    <>
    <div className='container-fluid p-0'>
      <div className='row'>
          <div className='col-sm-6 offset-1'>
            <h1 className='mt-3 ajukan-content'>
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
              <CKEditor 
              editor={ClassicEditor}
              onInit={editor =>{}}
              config={{removePlugins: ['Image', 'ImageCaption','Table', 'ImageStyle', 'ImageToolbar', 'ImageUpload', 'MediaEmbed']}}
              data={defaultValue}
              />
            </InputGroup>
            <Form>
              <Button className='mt-3' onClick={handleClick}>
              <FiUpload className='mb-1 mr-2'/>Upload Gambar/Video
              </Button>
              <Form.Group>
                <Form.File id="exampleFormControlFile1" label="Example file input" 
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{display:'none'}} />
              </Form.Group>
            </Form>
            <Button size='md'className='p-2 pl-5 pr-5 mt-1 input-ajukan'>Ajukan</Button>
          </div>
        <div className='col-md-4 ml-5 my-auto'>
          <img src={ajukan} alt='Home-Ilustration' className='img-fluid img-content mx-auto' style={{display: "flex"}} width='60%'/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Ajukan;