import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import FilesTableHeader from './FilesTableHeader';
import FilesTableItems from './FilesTableItems';

const FilesTable = () => {
  return (
    <Row>
      <Col>
        <Container>
          <Table striped bordered hover>
            <FilesTableHeader items={['File Name', 'Text', 'Number', 'Hex']} />
            <FilesTableItems
              fileNames={[
                {
                  name: 'test1.csv',
                  text: 'sdv',
                  number: 235235,
                  hex: 'ounoivn',
                },
                {
                  name: 'test1.csv',
                  text: 'fdbdfb',
                  number: 346346436,
                  hex: 'dfbdfbfd',
                },
                {
                  name: 'test2.csv',
                  text: 'dfhdfhdfha',
                  number: 235235,
                  hex: 'wetwettwet',
                },
                {
                  name: 'test2.csv',
                  text: 'weeeweet',
                  number: 77457654,
                  hex: 'yulyulyul',
                },
              ]}
            />
          </Table>
        </Container>
      </Col>
    </Row>
  );
};

export default FilesTable;
