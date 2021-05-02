"use strict";

var _Template = _interopRequireDefault(require("@templates/Template.js"));

require("@styles/main.css");

require("@styles/var.styl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(function App() {
  var main;
  return regeneratorRuntime.async(function App$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          main = null || document.getElementById('main');
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _Template["default"])());

        case 3:
          main.innerHTML = _context.sent;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
})();