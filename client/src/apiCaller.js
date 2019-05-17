import axios from 'axios';

export default function callApi(endpoint, method = 'GET', data = null, headers = null) {
  return axios({
      method: method,
      url: `http://localhost:5000/${endpoint}`,
      data: data,
      headers: headers
    });
  };
  // headers: {'Authorization': localStorage.getItem("token")}