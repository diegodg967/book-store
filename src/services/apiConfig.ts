import axios from 'axios';

const Service = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
});

export default Service;
