import Api from './api';

class Summary {
  constructor(fetch, session) {
    this.api = new Api(fetch, session);
  }

  get(index = 1) {
    return this.api.get(`/summary/${index}`);
  }
}
export default Summary;
