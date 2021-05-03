"use strict";

(function App() {
  var main;
  return regeneratorRuntime.async(function App$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          main = null || document.getElementById('main');
          _context.next = 3;
          return regeneratorRuntime.awrap(Template());

        case 3:
          main.innerHTML = _context.sent;

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
})();