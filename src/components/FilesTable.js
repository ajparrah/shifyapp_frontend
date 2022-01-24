import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FilesTableHeader from './FilesTableHeader';
import FilesTableItems from './FilesTableItems';
import ShifyService from '../services/Shify.service';

const FilesTable = () => {
  const [fileNames, setFileNames] = useState([]);
  const [isFetchingData, setIsFetchingData] = useState();
  const [errorFetching, setErrorFetching] = useState({
    value: false,
    msg: '',
  });
  const [fileNameToFilter, setFileNameToFilter] = useState('');
  const [filterBy, setFilterBy] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        setIsFetchingData(true);
        setErrorFetching({ value: false, msg: '' });
        const filesData = await ShifyService.getFilesData(filterBy);
        setFileNames(filesData);
        setIsFetchingData(false);
      } catch (error) {
        setIsFetchingData(false);
        setErrorFetching({
          value: true,
          msg: error.message,
        });
      }
    };

    getData();
  }, [filterBy]);

  return (
    <>
      <Row className="mb-4">
        <Col>
          <Container>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    placeholder="Search by file name. Ex: test2.csv"
                    onChange={(e) => setFileNameToFilter(e.target.value)}
                    onKeyPress={(e) => {
                      const userPressEnter = e.key === 'Enter';
                      if (userPressEnter) {
                        e.preventDefault();
                        setFilterBy(fileNameToFilter);
                      }
                    }}
                  />
                </Col>
                <Col>
                  <Button
                    variant="primary"
                    type="button"
                    disabled={isFetchingData}
                    onClick={() => setFilterBy(fileNameToFilter)}
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Form>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Table striped bordered hover>
              <FilesTableHeader
                items={['File Name', 'Text', 'Number', 'Hex']}
              />
              <FilesTableItems
                fileNames={fileNames}
                isFetchingData={isFetchingData}
                errorFetching={errorFetching}
              />
            </Table>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default FilesTable;
