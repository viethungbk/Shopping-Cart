import axios from 'axios';

export default function callApi(endpoint, method = 'GET', data) {
  return axios({
      method: method,
      url: `http://localhost:5000/${endpoint}`,
      data: data,
      headers: {'Authorization': localStorage.getItem("token")}
  });
};