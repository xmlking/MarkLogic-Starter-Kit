'use strict';

System.import('index')
  .then(function(module) {
    // uncomment for debugging.
    // zone = zone.fork(Zone.longStackTraceZone);
    return module.main();
  })
  .catch(console.error.bind(console));
