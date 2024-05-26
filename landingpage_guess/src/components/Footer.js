import { Col, Row, Container } from 'react-bootstrap';
import logo from '../images/logovalorant.jpg';
import icon from '../images/logoinstagram.png';
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="column-footer">
            <div className="title17">Aku Ingin:</div>
            <li>
              <button className="button6">Buat akun</button>
            </li>
            <li>
              <button className="button6">Masuk akun</button>
            </li>
            <li>
              <button className="button6">Rekomendasi Nutrisi</button>
            </li>
            <li>
              <button className="button6">Masuk akun</button>
            </li>
            <li>
              <button className="button6">Komunitas</button>
            </li>
          </Col>
          <Col>
            <div className="title18">Kontak Kami:</div>
            <div className="title19">Email:</div>
            <div className="title19">info@aturpola.com</div>
            <div className="title19">Instagram:</div>
            <div className="iconmedsos" style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <img width={'30px'} src={icon} style={{marginLeft: '10px'}} height={'30px'}/>
              </div>
            <div className="title19">Phone:</div>
            <div className="title19">+62 123 4567 890</div>
          </Col>

          <div className="horizontal-line1"></div>
          <div className="title22">2024@ All rights reserved. Sirkel Dosen Team</div>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
