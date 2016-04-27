export default class SideBarTableController {
  constructor(SideBarTableService) {
    'ngInject';
    this.SideBarTableService = SideBarTableService;
  }

  $onInit() {
    this.disabled = false;
    this.itemsBody = [];
    this.itemsHead = [{
      title: 'Name',
      col1: 'Id',
      col2: 'Phone'
    }];
    this.SideBarTableService.list().then(data => this.data = data);
  }
  getUsers() {
    if (!this.data) {
      return console.log('data is undefined');
    }

    this.disabled = true;
    this.itemsBody = this.data.map(item => ({
      title: item.name,
      col1: item.id,
      col2: item.phone
    }));
  }
}
