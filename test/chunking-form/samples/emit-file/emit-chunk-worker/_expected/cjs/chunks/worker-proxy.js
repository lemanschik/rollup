'use strict';

PLACEHOLDER((typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__dirname + '/worker.js').href : new URL('worker.js', document.currentScript && document.currentScript.src || document.baseURI).href));
