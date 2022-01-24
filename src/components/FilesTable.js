import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
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

  useEffect(() => {
    const getData = async () => {
      try {
        setIsFetchingData(true);
        const filesData = await ShifyService.getFilesData();
        setFileNames(filesData);
        setIsFetchingData(false);
      } catch (error) {
        setErrorFetching({
          value: true,
          msg: error.message,
        });
      }
    };

    getData();
  }, []);

  return (
    <Row>
      <Col>
        <Container>
          <Table striped bordered hover>
            <FilesTableHeader items={['File Name', 'Text', 'Number', 'Hex']} />
            <FilesTableItems
              fileNames={fileNames}
              isFetchingData={isFetchingData}
              errorFetching={errorFetching}
            />
          </Table>
        </Container>
      </Col>
    </Row>
  );
};

export default FilesTable;
