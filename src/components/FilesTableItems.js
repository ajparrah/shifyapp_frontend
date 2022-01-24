import FilesTableItem from './FilesTableItem';

const FilesTableItems = ({ fileNames, isFetchingData, errorFetching }) => {
  return (
    <tbody>
      <IsFetchingFilesTablesItems isFetching={isFetchingData}>
        <ErrorBoundaryFilesTablesItems error={errorFetching}>
          {fileNames.length > 0 ? (
            fileNames.map((fileName, index) => (
              <FilesTableItem
                key={index}
                fileName={fileName.name}
                text={fileName.text}
                number={fileName.number}
                hex={fileName.hex}
              />
            ))
          ) : (
            <tr>
              <td colSpan={4}>Data could not be got from service</td>
            </tr>
          )}
        </ErrorBoundaryFilesTablesItems>
      </IsFetchingFilesTablesItems>
    </tbody>
  );
};

const IsFetchingFilesTablesItems = ({ isFetching, children }) => {
  return (
    <>
      {isFetching ? (
        <tr>
          <td colSpan={4} className="text-center py-5">
            Loading...
          </td>
        </tr>
      ) : (
        children
      )}
    </>
  );
};

const ErrorBoundaryFilesTablesItems = ({ error, children }) => {
  return (
    <>
      {error.value ? (
        <tr>
          <td colSpan={4} className="text-center fw-bold py-5">
            {error.msg}
          </td>
        </tr>
      ) : (
        children
      )}
    </>
  );
};

export default FilesTableItems;
