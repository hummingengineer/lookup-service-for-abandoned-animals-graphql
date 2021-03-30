const { RESTDataSource } = require('apollo-datasource-rest');
const fetchData = require('../utils/fetch-data');

class AbandonedAnimalAPI extends RESTDataSource {
  constructor() {
    super();
  }

  async getSidoResponse() {
    return await fetchData('/sido');
  }

  async getSigunguResponse(args) {
    return await fetchData('/sigungu', args);
  }

  async getShelterResponse(args) {
    return await fetchData('/shelter', args);
  }

  async getKindResponse(args) {
    return await fetchData('/kind', args);
  }

  async getAbandonmentPublicResponse(args) {
    return await fetchData('/abandonmentPublic', args);
  }
}

module.exports = AbandonedAnimalAPI;
