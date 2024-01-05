import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
  baseURL: "http://127.0.0.1:5001/clone-e0935/us-central1/api",
});

export default instance;
