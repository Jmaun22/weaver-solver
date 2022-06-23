import axios from 'axios';

const search = async () =>
  axios.get(`http://localhost:3001/api/tracking`);

  const postit = async (data) =>
    axios.post(`http://localhost:3001/api/tracking`, data);

export default { search, postit };