import FilesTableItem from './FilesTableItem';

const FilesTableItems = ({ fileNames, isFetchingData, errorFetching }) => {
  return (
    <tbody>
      <IsFetchingFilesTablesItems isFetching={isFetchingData}>
        {errorFetching.value ? (
          <tr>
            <td colSpan={4} className="text-center fw-bold py-5">
              {errorFetching.msg}
            </td>
          </tr>
        ) : fileNames.length > 0 ? (
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

export default FilesTableItems;
