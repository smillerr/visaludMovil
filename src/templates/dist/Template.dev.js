"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getData = _interopRequireDefault(require("../utils/getData.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Template = function Template() {
  var data, view;
  return regeneratorRuntime.async(function Template$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _getData["default"])());

        case 2:
          data = _context.sent;
          view = "\n    <div class=\"About\">\n      <div class=\"card\">\n        <div class=\"card_details\">\n          <div class=\"card_photo center circle\">\n            <img src=\"".concat(data.picture.large, "\" alt=\"").concat(data.name.first, "\">\n            <svg viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\" style=\"enable-background:new -580 439 577.9 194;\"\n              xml:space=\"preserve\">\n              <circle cx=\"50\" cy=\"50\" r=\"40\" />\n            </svg>\n          </div>\n          <p class=\"card_title\">Hi, My name is</p>\n          <p class=\"card_value\">").concat(data.name.first, " ").concat(data.name.last, "</p>\n        </div>\n        <div class=\"card_userdata\">\n          <ul>\n            <li>").concat(data.email, "</li>\n            <li>").concat(data.location.country, "</li>\n          </ul>\n        </div>\n        <div class=\"card_social\">\n          <a href=\"https://twitter.com/gndx\">\n            <img src=\"assets/images/twitter.png\" />\n          </a>\n          <a href=\"https://github.com/gndx\">\n            <img src=\"assets/images/github.png\" />\n          </a>\n          <a href=\"https://instagram.com/gndx\">\n            <img src=\"assets/images/instagram.png\" />\n          </a>\n        </div>\n      </div>\n    </div>\n  ");
          return _context.abrupt("return", view);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = Template;
exports["default"] = _default;