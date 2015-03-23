System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "bower:*": "jspm_packages/bower/*.js"
  },
  "buildCSS": true,
  "separateCSS": false,
  "traceurOptions": {
    "annotations": true,
    "memberVariables": true,
    "typeAssertions": true,
    "typeAssertionModule": "rtts_assert",
    "types": true
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.4.0-build.3924+sha.e5d1d65",
    "angular-new-router": "npm:angular-new-router@0.5.0",
    "bourbon": "bower:bourbon@4.2.1",
    "rtts-assert": "npm:rtts-assert@2.0.0-alpha.7",
    "npm:angular-new-router@0.5.0": {
      "jspm:angular": "github:angular/bower-angular@1.4.0-build.3924+sha.e5d1d65"
    }
  }
});
