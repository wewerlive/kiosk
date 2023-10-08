import axios from 'axios';
import { host } from './routes';

export default axios.create({
  baseURL: host,
  timeout: 10000,
});
