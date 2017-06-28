require('babel-register')();

var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('');

var exposedProperties = ['window', 'navigator', 'document'];

global.document = dom.window.document;
global.window = dom.window;
Object.keys(dom.window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

global.documentRef = document;
