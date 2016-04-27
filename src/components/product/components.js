import template from './product-template.html';
import controller from './controllers';

export default () => ({
    template,
    controller,
    restrict: 'E',
    replace: true,
    controllerAs: 'vmp',
    require: {
      HomeController: '^^home',
    },
    bindToController: true
});
