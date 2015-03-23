//- app/bootstrap.js
/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */

import ng from 'angular';
import appModule from './index';

ng.element(document).ready(function() {
  // everything is loaded...go!
  console.log('Angular Version:',ng.version);
  ng.bootstrap(document, [appModule.name], {
    strictDi: true
  })
});
