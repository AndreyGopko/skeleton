import './product.less';

import ng from 'angular';

import ProductComponent from './components';

export default ng.module('app.components.product', [])
  .directive('product', ProductComponent)
  .name;
