import Container from 'react-bootstrap/Container';
import FilesTable from './components/FilesTable';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <Container fluid>
        <Header />
        <FilesTable />
      </Container>
    </>
  );
};

export default App;
