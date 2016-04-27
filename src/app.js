import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

import ng from 'angular';

import Components from './components';
import Containers from './containers';

ng.module('app', [Components, Containers])
