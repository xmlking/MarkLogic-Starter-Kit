# MarkLogic Starter Kit — the seed for MarkLogic and AngularJS apps

This project is an application skeleton for a typical [AngularJS](http://angularjs.org/) web app.
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.


```
#Globle npm Setup
npm install -g babel gulp jspm

#Local npm Setup
npm install jspm --save-dev
npm install systemjs --save-dev
 

#one-time Setup
jspm init
jspm init -p  # to run again


#Using Plugins
jspm install css
jspm install json

#Using custom endpoint
npm install jspm-bower-endpoint --save-dev
jspm endpoint create bower jspm-bower-endpoint

#Simply add the -o option to an install to set the package override:
jspm install github:twbs/bootstrap -o "{ main: 'js/bootstrap', shim: { 'js/bootstrap': ['jquery'] } }"
jspm install github:marcorinck/angular-growl -o "{ main: 'build/angular-growl.min.js', dependencies: { 'angular': '1.3.8'} }"


#Works
jspm install angular@^1.4.0-build -o '{"main": "angular", "shim": { "angular": { "exports": "angular" } } }'
jspm install npm:angular-new-router -o '{"main": "dist/router.es5", "format": "es6",  "dependencies": {"jspm:angular": "^1.4.0-build"}, "shim": { "dist/router.es5": {"deps": ["angular"]} } }'
jspm install npm:rtts-assert@^2.0.0-alpha -o '{"main": "rtts-assert.es6", "format": "es6"}'
jspm install bower:bourbon
 
jspm install npm:angular2 -o '{ "main": "es6/prod/*.es6",  "format": "es6", "dependencies": {}}'

#Updating Packages
jspm update
jspm update jquery

#Inspecting Dependencies
jspm inspect

#uninstall a package:
jspm uninstall jquery
##Run `jspm clean` at any time to perform this same clearing operation.

#Creating a Bundle #Note that bundles also support compiling ES6 code.
jspm bundle src/main build.js
#Creating a bundle with arithmetic
jspm bundle app/main - react + moment build.js

#alias gulp to use babel-node  
alias gulp='babel-node --experimental `which gulp`'
```

Docs:
https://github.com/jspm/jspm-cli/wiki
http://angular.github.io/router/

https://github.com/lookfirst/systemjs-material-start/blob/master/src/app/app.js
https://github.com/lookfirst/systemjs-seed

babel-node and gulp-watch problem https://github.com/babel/babel/issues/489 
  fix options
    use `npm shrinkwrap --dev` as temp fix
    delete node_modules/browser-sync/node_modules/glob-watcher/node_modules/gaze/node_modules/globule/node_modules/lodash

browser-sync need Visual Studio on windows
npm install -g browser-sync --msvs_version=2013
