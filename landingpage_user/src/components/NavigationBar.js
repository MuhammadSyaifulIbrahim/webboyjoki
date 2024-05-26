import logo from '../images/logo.png';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div>
      <Navbar className="navigation0">
        <div className="logo">
          <img src={logo}  className="logomen" />
        </div>
        <Container className="navigation">
          <Nav className="navigationTengah">
          </Nav>
          <Nav className="login">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Joki Valorant</Nav.Link>
            <Nav.Link>Cek Pesanan </Nav.Link>
            <Nav.Link>USER</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
