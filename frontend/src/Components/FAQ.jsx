import "../App.css";
import { Form, Button } from "react-bootstrap";

const FAQ = () => {
  return (
    <>
    <div className='container-fluid p-0'>
      <div className='row ml-1 mr-1 mt-3'>
          <div className="col-sm-8 my-auto mx-auto">
            <div className="row">
              <div className="col-sm-4 mx-auto">
                <h1 className="text-center mt-2 mb-3 title-faq font-weight-bold">FAQ InfoTech</h1>
              </div>
            </div>
            <Form>
              <Form.Group className="w-100 border-faq p-3 mt-4">
                <Form.Label className="head-faq">1. Apa itu InfoTech?</Form.Label>
                <br/>
                <Form.Text className="text-justify text-faq">Perhial dunia teknologi saja. Dimohon untuk tidak menanyakan perihal hal-hal yang tidak berkaitan dengan dunia teknologi.</Form.Text>
              </Form.Group>
              <Form.Group className="w-100 border-faq p-3 mt-4">
                <Form.Label className="head-faq">2. Apa saja yang ditanyakan di InfoTech?</Form.Label>
                <br/>
                <Form.Text className="text-justify text-faq">InfoTech adalah sarana untuk bertanya seputar dunia teknologi, seperti bertanya solusi dari laptop atau gawai yang mengalami kerusakan, atau bertanya seputar spesifikasi laptop atau PC terbaik untuk task tertentu, bertanya seputar codingan yang mengalami error juga bisa.</Form.Text>
              </Form.Group>
              <Form.Group className="w-100 border-faq p-3 mt-4">
                <Form.Label className="head-faq">3. Ketika saya bertanya, apakah pertanyaan saya sudah pasti dijawab?</Form.Label>
                <br/>
                <Form.Text className="text-justify text-faq">Belum tentu, tergantung kepada pengguna lain. Sebab, kami selaku pengembang hanya menyediakan sarana saja, terkait teknis pertanyaan dan jawaban, semuanya berada di tangan pengguna sepenuhnya. Sehingga, keputusan untuk menjawab sebuah pertanyaan atau tidak, berada pada pengguna-pengguna lain di situs kami.</Form.Text>
              </Form.Group>
              <Form.Group className="w-100 border-faq p-3 mt-4">
                <Form.Label className="head-faq">4. Apakah saya bisa mengirim gambar untuk memperjelas maksud dari pertanyaan saya?</Form.Label>
                <br/>
                <Form.Text className="text-justify text-faq">Bisa. Pengguna bisa menambahkan maksimal 5 gambar dengan ukuran gambar maksimal 2MB dengan cara klik tombol "Browse", kemudian pilih gambar yang Anda inginkan, kemudian klik tombal 'Ajukan", dan voila!</Form.Text>
              </Form.Group>
              <Form.Group className="w-100 border-faq p-3 mt-4">
                <Form.Label className="head-faq">5. Apakah saya bisa mengirim video untuk memperjelas maksud dari pertanyaan saya?</Form.Label>
                <br/>
                <Form.Text className="text-justify text-faq">Bisa, pengguna bisa menambahkan sebuah video dengan maksimal ukuran video 40MB.  Mengenai cara untuk menambahkan video, lakukan langkah-langkahnya sama seperti langkah untuk menambahkan gambar.</Form.Text>
              </Form.Group>
              <Form.Group className="w-100 border-faq p-3 mt-4">
                <Form.Label className="head-faq">6. Kapan tepatnya saya harus menggunakan kategori pada situs InfoTech? </Form.Label>
                <br/>
                <Form.Text className="text-justify text-faq">Kategori "Gadget Error" digunakan ketika Anda bertanya ingin seputar laptop atau gadget Anda yang mengalami kerusakan.  Kategori "Coding" digunakan ketika Anda ingin betanya seputar codingan Anda yang mengalami error namun Anda tidak tahu cara mengatasinya.  Terakhir, kategori "Teknologi" digunakan ketika Anda bertanya seputar teknologi secara luas, seperti spesifikasi laptop, masa depan kecerdasan buatan Indonesia, lowongan pekerjaan, dan lain-lain.</Form.Text>
              </Form.Group>
              <Form.Group className="w-100 border-faq p-3 mt-4">
                <Form.Label className="head-faq">7. Saya menemukan error pada situs InfoTech, apa yang harus saya lakukan?</Form.Label>
                <br/>
                <Form.Text className="text-justify text-faq">Silahkan mengirimkan keluhan error kepada e-mail kami yang tertera pada laman "Kontak Kami" dengan subjek e-mail "InfoTech Error."</Form.Text>
              </Form.Group>
              <Form.Group className="w-100 border-faq p-3 mt-4">
                <Form.Label className="head-faq">8. Bagaimana jika Pengguna memiliki ide fitur yang dapat membuat situs InfoTech mendapat banyak pengguna?</Form.Label>
                <br/>
                <Form.Text className="text-justify text-faq">Silahkan mengirimkan ide-ide fitur yang dapat ditambahkan di situs kami melalui email kami di laman "Kontak Kami" dengan subjek email "Ide Fitur untuk InfoTech."</Form.Text>
              </Form.Group>
            </Form>
          </div>
        </div>
    </div>
    </>
  );
};

export default FAQ;