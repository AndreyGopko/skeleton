import './sideBar.less';

import ng from 'angular';

import SideBarTableComponent from './components';
import SideBarTableService from './services';

export default ng.module('app.components.sideBarTable', [])
  .service('SideBarTableService', SideBarTableService)
  .directive('sideBarTable', SideBarTableComponent)
  .name;
