const axios = require('axios');
require('dotenv').config();

const req = axios.create({
  baseURL: 'http://openapi.animal.go.kr/openapi/service/rest/abandonmentPublicSrvc',
  params: {
    ServiceKey: process.env.SERVICE_KEY,
  },
  paramsSerializer: (paramObj) => {
    const params = new URLSearchParams();

    for (const key in paramObj) {
      paramObj[key] && params.append(key, paramObj[key]);
    }

    return params.toString();
  },
});

module.exports = req;
