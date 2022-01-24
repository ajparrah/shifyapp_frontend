export default class ShifyService {
  static async getFilesData(fileNameToFilter) {
    try {
      let resource = '/files/data';
      if (fileNameToFilter && fileNameToFilter.length) {
        resource += `?fileName=${fileNameToFilter}`;
      }
      const url = `${process.env.REACT_APP_SHIFY_SERVICE_API_URL}${resource}`;
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      if (data.ok) {
        const { files } = data;
        const isFilteringData = fileNameToFilter.length > 0;
        return this.parseData(files, isFilteringData);
      } else {
        throw new Error(data.msg);
      }
    } catch (error) {
      throw Error(error.message);
    }
  }

  static parseData(data, isFiltering = false) {
    if (isFiltering) {
      const { lines, file } = data;
      return lines.map((line) => ({ ...line, name: file }));
    }
    return data
      .map((fileData) => {
        const { lines, file } = fileData;
        return lines.map((line) => ({ ...line, name: file })); // It's easier to handle it
      })
      .flat();
  }
}
