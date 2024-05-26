import { Col, Container, Nav, Row, Card } from 'react-bootstrap';
import peningkatan from '../images/logo.png';
import emosional from '../images/logo.png';
import jantung from '../images/logo.png';
import waktu from '../images/logo.png';
import gambar1 from '../images/jettdark.jpg';
import gambar2 from '../images/agent.jpg';
import gambar3 from '../images/valorant.jpg';

const JokiRank = () => {
  return (
    <div className="health-container">
      <Container className="Joki">
        <div className="title4">JOKI RANK VALORANT</div>
        <Row className="health-row">
          <Col>
            <div className="column-content">
               <div className="card" style={{width: "18rem"}}>
  <img
  className="card-img-top"
  src={gambar1}
  alt="First"
  />
  <div className="card-body">
    <p className="card-text">JOKI RANK</p>
    <button className='btn btn-primary'>PILIH</button>
  </div>
</div>
            </div>
          </Col>
          <Col>
            <div className="column-content">
            <div className="card" style={{width: "18rem"}}>
  <img
  className="card-img-top"
  src={gambar2}
  alt="Second"
  />
  <div className="card-body">
    <p className="card-text">JOKI GENDONG</p>
    <button className='btn btn-primary'>PILIH</button>
  </div>
</div>
            </div>
          </Col>
          <Col>
            <div className="column-content">
            <div className="card" style={{width: "18rem"}}>
  <img
  className="card-img-top"
  src={gambar3}
  alt="Third"
  />
  <div className="card-body">
    <p className="card-text">JASA COACHING</p>
    <button className='btn btn-primary'>PILIH</button>
  </div>
</div>
            </div> 
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default JokiRank;
