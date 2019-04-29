"use strict";

var _lodash = _interopRequireDefault(require("lodash"));

require("./style.css");

var _icon = _interopRequireDefault(require("./icon.png"));

var _print = _interopRequireDefault(require("./print.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function component() {
  const element = document.createElement('div'); // Lodash, currently included via a script, is required for this line to work

  element.innerHTML = _lodash.default.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello'); // Add the image to our existing div.

  const myIcon = new Image();
  myIcon.src = _icon.default;
  element.appendChild(myIcon);
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = _print.default;
  element.appendChild(btn);
  return element;
}

let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the update printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  });
}