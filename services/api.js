import axios from 'axios';

// base url added for making request shorter
// if api migrates to another url it won't change the logic in components
const instance = axios.create({
  baseURL: 'https://www.thesportsdb.com',
  responseType: 'json',
  headers: {
    Accept: 'application/json'
  }
});

export default instance;
