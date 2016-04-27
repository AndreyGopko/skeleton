import ng from 'angular';

import Header from './header';
import Menu from './menu';
import SideBar from './sideBar';
import Footer from './footer';
import Product from './product';
import SideBarTable from './sideBarTable';

export default ng.module('app.components', [Header, Menu, SideBar, Footer, Product, SideBarTable]).name;
