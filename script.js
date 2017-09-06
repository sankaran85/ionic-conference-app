var fs = require('fs');

var SourceMapConsumer = require('source-map').SourceMapConsumer;

var sourceMapData = fs.readFileSync('www/build/main.js.map').toString('utf-8');

var smc = new SourceMapConsumer(sourceMapData);

let tsReg = /\.ts/ig;

let original = smc.originalPositionFor({
  line: 1,
  column: 112276
});

console.log('original: ', original);

let sourceContent = smc.sourceContentFor(original.source);

let lines = sourceContent.split('\n');

let center = lines[original.line];

let context = lines.slice(Math.max(0, original.line - 4), Math.min(lines.length, original.line + 4))

console.log(context.join('\n'));