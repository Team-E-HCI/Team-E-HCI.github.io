import "../App.css";
import { Form, Button } from "react-bootstrap";

const Profile = () => {
  return (
    <>
    <div className='container-fluid p-0'>
      <div className='row ml-1 mr-1 mt-3'>
          <div className="col-sm-6 my-auto mx-auto">
            <h1 className="text-center mt-2 mb-3 head-kuisioner">Kuisioner Infotech</h1>
            <Form>
              <Form.Group className="w-100 border-kuisioner p-3">
                <Form.Label className="range-form">Dari skala 1-5, Berapa tingkat kepuasan Anda dalam menggunakan website kami?</Form.Label>
                <br/>
                <div className="mt-2 mx-auto" style={{display:"flex"}}>
                <Form.Check style={{display:"inline-flex"}} name="range-1" className="mx-auto" type="radio" id="range-11" value="1" label="1"/>
                <Form.Check style={{display:"inline-flex"}} name="range-1" className="mx-auto" type="radio" id="range-12" value="2" label="2"/>
                <Form.Check style={{display:"inline-flex"}} name="range-1" className="mx-auto" type="radio" id="range-13" value="3" label="3"/>
                <Form.Check style={{display:"inline-flex"}} name="range-1" className="mx-auto" type="radio" id="range-14" value="4" label="4"/>
                <Form.Check style={{display:"inline-flex"}} name="range-1" className="mx-auto" type="radio" id="range-15" value="5" label="5"/>
                </div>
              </Form.Group>
              <Form.Group className="w-100 border-kuisioner p-3">
                <Form.Label className="range-form">Dari skala 1-5, Berapa tingkat kenyamanan Anda dalam menggunakan website kami?</Form.Label>
                <br/>
                <div className="mt-2 mx-auto" style={{display:"flex"}}>
                <Form.Check style={{display:"inline-flex"}} name="range-2" className="mx-auto" type="radio" value="1" id="range-21" label="1"/>
                <Form.Check style={{display:"inline-flex"}} name="range-2" className="mx-auto" type="radio" value="2" id="range-22" label="2"/>
                <Form.Check style={{display:"inline-flex"}} name="range-2" className="mx-auto" type="radio" value="3" id="range-23" label="3"/>
                <Form.Check style={{display:"inline-flex"}} name="range-2" className="mx-auto" type="radio" value="4" id="range-24" label="4"/>
                <Form.Check style={{display:"inline-flex"}} name="range-2" className="mx-auto" type="radio" value="5" id="range-25" label="5"/>
                </div>
              </Form.Group>
              <Form.Group className="w-100 border-kuisioner p-3">
                <Form.Label className="range-form">Apakah semua fitur, menu, dan desain pada situs kami mudah untuk dipahami?</Form.Label>
                <br/>
                <div className="mt-2 ml-3">
                <Form.Check name="range-3" className="mt-2" type="radio" id="range-31" value="Sangat Sulit Dipahami" label="Sangat Sulit Dipahami"/>
                <Form.Check name="range-3" className="mt-2" type="radio" id="range-32" value="Sulit Dipahami" label="Sulit Dipahami"/>
                <Form.Check name="range-3" className="mt-2" type="radio" id="range-33" value="Cukup Mudah Dipahami" label="Cukup Mudah Dipahami"/>
                <Form.Check name="range-3" className="mt-2" type="radio" id="range-34" value="Mudah Dipahami" label="Mudah Dipahami"/>
                <Form.Check name="range-3" className="mt-2" type="radio" id="range-35" value="Sangat Mudah" label="Sangat Mudah"/>
                </div>
              </Form.Group>
              <Form.Group className="w-100 border-kuisioner p-3">
                <Form.Label className="range-form">Apakah website kami sudah memenuhi kebutuhan Anda?</Form.Label>
                <br/>
                <div className="mt-2 ml-3">
                <Form.Check name="range-4" className="mt-2" type="radio" id="range-41" value="Tidak Memenuhi" label="Tidak Memenuhi"/>
                <Form.Check name="range-4" className="mt-2" type="radio" id="range-42" value="Memenuhi" label="Memenuhi"/>
                <Form.Check name="range-4" className="mt-2" type="radio" id="range-43" value="Sangat Memenuhi" label="Sangat Memenuhi"/>
                </div>
              </Form.Group>
              <Form.Group className="w-100 border-kuisioner p-3">
                <Form.Label className="range-form">Demi meningkatkan kepuasan pengguna, tolong berikan saran dan kritik terhadap website kami.</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button className="mx-auto btn-kuisioner p-2 px-5 mb-3" style={{display:"flex"}}>Kirim</Button>
            </Form>
          </div>
        </div>
    </div>
    </>
  );
};

export default Profile;