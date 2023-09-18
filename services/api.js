import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.thesportsdb.com',
  responseType: 'json',
  headers: {
    Accept: 'application/json'
  }
});

export default instance;
