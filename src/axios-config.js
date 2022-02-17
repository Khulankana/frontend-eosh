import axios from "axios";
import https from 'https';

axios.defaults.baseURL =  "https://admin.eoshacademy.com/api/v1/";
axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  });