export default class SideBarTableService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
  }

  list() {
    return this.$http.get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.data;
      });
  }
}
