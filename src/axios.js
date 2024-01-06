import axios from "axios";
import { axiosBaseUrl } from './config';

const instance = axios.create({
    // THE API (cloud function) URL
  baseURL: axiosBaseUrl,
});

export default instance;
