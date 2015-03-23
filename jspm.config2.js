System.config({
  "baseURL": "./",
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "angular2/*": "node_modules/angular2/es6/prod/*.es6",
    "rtts_assert/*": "node_modules/angular2/node_modules/rtts_assert/es6/*.es6"
  },
  "traceurOptions": {
    "annotations": true,
    "memberVariables": true,
    "typeAssertions": true,
    "typeAssertionModule": "rtts_assert/rtts_assert",
    "types": true
  }
});

System.config({
  "map": {
    "bootstrap-sass": "npm:bootstrap-sass@3.3.4",
    "css": "github:systemjs/plugin-css@0.1.0",
    "lodash": "npm:lodash@3.5.0",
    "zone.js": "npm:zone.js@0.4.1",
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:lodash@3.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:zone.js@0.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

