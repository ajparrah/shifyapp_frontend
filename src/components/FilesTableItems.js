import FilesTableItem from './FilesTableItem';

const FilesTableItems = ({ fileNames }) => {
  return (
    <tbody>
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
          <td colSpan={4}>{'Data could not be got from service'}</td>
        </tr>
      )}
    </tbody>
  );
};

export default FilesTableItems;
