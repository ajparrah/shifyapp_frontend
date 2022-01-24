import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Header = () => {
  return (
    <Row className="bg-danger text-white py-3 mb-4">
      <Col>
        <h3 className="fw-bold">React Test App</h3>
      </Col>
    </Row>
  );
};

export default Header;
