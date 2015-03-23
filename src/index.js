//- app/app.js
/**
 * loads sub modules and wraps them up into the main module
 * this file should be used for top-level module definitions only
 */

import './vendor';

import coreModule from './core/index';
import homeModule from './home/index';

let appModule = angular.module('spaApp',
  [
    // 3rd party modules
    'ui.router',
    'ui.bootstrap',

    // App sub-modules
    coreModule.name,
    homeModule.name
  ]);


export default appModule;
