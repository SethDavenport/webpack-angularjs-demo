import * as angular from 'angular';
import 'core-js';
import '@wealthsimple/fabric/scss/fabric.scss';

import './index.css';
import AppComponent from './app';
import ExpanderEs6Component from './expander-es6';
import ExpanderTsComponent from './expander-ts';
const { ExpanderRubyishComponent } = require('./expander-rubyish');

export default angular.module('ws.toolchain-demo', [])
  .component('app', AppComponent)
  .component('expanderEs6', ExpanderEs6Component)
  .component('expanderTs', ExpanderTsComponent)
  .component('expanderRubyish', ExpanderRubyishComponent)
  .name;
