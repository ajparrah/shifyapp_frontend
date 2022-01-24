const FilesTableHeader = ({ items }) => {
  return (
    <thead>
      {items.length > 0 ? (
        <tr>
          {items.map((item, index) => (
            <th key={index}>{item}</th>
          ))}
        </tr>
      ) : (
        <tr>
          <th>Default</th>
        </tr>
      )}
    </thead>
  );
};

export default FilesTableHeader;
