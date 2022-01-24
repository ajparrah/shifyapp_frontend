const FilesTableItem = ({ fileName, text, number, hex }) => {
  return (
    <tr>
      <td>{fileName}</td>
      <td>{text}</td>
      <td>{number}</td>
      <td>{hex}</td>
    </tr>
  );
};

export default FilesTableItem;
