"format es6"
// var System = require('systemjs')

import styles   from './tasks/styles';
//import fonts    from './tasks/fonts';
//import images   from './tasks/images';
//import partials from './tasks/partials';
//import wiredep  from './tasks/wiredep';
import scripts  from './tasks/scripts';
import watch    from './tasks/watch';
//import build    from './tasks/build';
import server   from './tasks/server';
//import unitTests from './tasks/unit';
//import e2eTests from './tasks/e2e';
//import deploy   from './tasks/deploy';

let gulp = require('gulp');
let config = require('js-yaml').safeLoad(require('fs').readFileSync('tasks/config.yml', 'utf8'));
let args = require('yargs').argv;

// Get environment, for environment-specific activities
global.env  = require('yargs').argv.env || process.env.NODE_ENV;
global.optimize = (env === 'PROD' || require('yargs').argv.optimize);
console.log('Using Env:', env);
console.log('Optimized:', optimize);

styles(gulp, config, args);
//fonts(gulp, config, args);
//images(gulp, config, args);
//partials(gulp, config, args);
//wiredep(gulp, config, args);
scripts(gulp, config, args);
watch(gulp, config, args);
//build(gulp, config, args);
server(gulp, config, args);
//unitTests(gulp, config, args);
//e2eTests(gulp, config, args);
//deploy(gulp, config, args);
