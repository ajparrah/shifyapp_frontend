export default class ShifyService {
  static async getFilesData() {
    try {
      const resource = '/files/data';
      const url = `${process.env.REACT_APP_SHIFY_SERVICE_API_URL}${resource}`;
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      if (data.ok) {
        const { files } = data;
        return this.parseData(files);
      } else {
        throw new Error(data.msg);
      }
    } catch (error) {
      throw Error(error.message);
    }
  }

  static parseData(data) {
    return data
      .map((fileData) => {
        const { lines, file } = fileData;
        return lines.map((line) => ({ ...line, name: file })); // It's easier to handle it
      })
      .flat();
  }
}
