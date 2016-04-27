export default class ProductController {
    constructor() {
        this.cards = [{
            title: "Title 1",
            description: "Description 1"
        }, {
            title: "Title 2",
            description: "Description 2"
        }, {
            title: "Title 3",
            description: "Description 3"
        }, {
            title: "Title 4",
            description: "Description 4"
        }, {
            title: "Title 5",
            description: "Description 5"
        }, {
            title: "Title 6",
            description: "Description 6"
        }];
    }
    $onInit() {
      this.data = {};
      this.classes = ["panel-default", "panel-success", "panel-primary", "panel-info", "panel-warning", "panel-danger"];
      this.HomeController.class = 0;
    }
    remove(index){
      let isConfirm = confirm("do you want to delete this item?");
      if(isConfirm){
          this.cards.splice(index, 1);
      }
    }
    addProduct(){
      if(this.data.head){
        for (let i = 0; i < this.cards.length; i++) {
          if(this.cards[i].title === this.data.head){
            this.error = true
            return;
          }
        }
        this.cards.push({title:this.data.head, description:this.data.text || "Default description"});
        this.data.head = "";
        this.data.text = "";
        this.error = false
      }
    }
}
