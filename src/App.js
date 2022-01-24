import { Col, Container, Row, Table } from 'react-bootstrap';

function App() {
  return (
    <>
      <Container fluid>
        <Row className="bg-danger text-white py-3 mb-4">
          <Col>
            <h3 className="fw-bold">React Test App</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Container>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>File Name</th>
                    <th>Text</th>
                    <th>Number</th>
                    <th>Hex</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
