export default class SideBarController {
  $onInit() {
    this.items = [{name:"Set class: default", active:true},{name:"Set class: success", active:false},{name:"Set class: primary", active:false},{name:"Set class: info", active:false},{name:"Set class: warning", active:false},{name:"Set class: danger", active:false}];
  }
  changeClass(index) {
    this.HomeController.class = index;
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].active = false;
    }
    this.items[index].active = true;
  }
}
