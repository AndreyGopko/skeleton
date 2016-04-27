import ng from 'angular';

 import Home from './components';
// import Products from './products';

export default ng.module('app.containers.home', [])
  .directive('home', Home)
  .name;
